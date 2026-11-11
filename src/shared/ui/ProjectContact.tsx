"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import { CONTACT_EMAIL, CONTACT_HREF, PROJECT_CONTACT_ENABLED } from "@/shared/constants/site";

const ProjectContactContext = createContext<(() => void) | null>(null);

export function ProjectContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  function openContact() {
    if (!PROJECT_CONTACT_ENABLED) {
      return;
    }

    setCopyStatus("idle");
    setOpen(true);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <ProjectContactContext.Provider value={openContact}>
      {children}
      <Dialog
        open={PROJECT_CONTACT_ENABLED && open}
        onClose={() => setOpen(false)}
        aria-labelledby="project-contact-title"
        aria-describedby="project-contact-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle
          id="project-contact-title"
          sx={{
            fontSize: { xs: 28, sm: 32 },
          }}
        >
          Обсудить проект
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2}>
            <Typography
              id="project-contact-description"
              sx={{
                color: "text.secondary",
              }}
            >
              Напишите, какую задачу нужно решить. Обсудим детали и следующие шаги.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 24, sm: 28 },
                fontWeight: 700,
                userSelect: "all",
                overflowWrap: "anywhere",
              }}
            >
              {CONTACT_EMAIL}
            </Typography>
            <Typography
              role="status"
              aria-live="polite"
              variant="body2"
              sx={{
                minHeight: 24,
                color: copyStatus === "error" ? "error.main" : "text.secondary",
              }}
            >
              {copyStatus === "copied" && "Адрес скопирован"}
              {copyStatus === "error" && "Не удалось скопировать. Выделите адрес и скопируйте его вручную."}
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions
          disableSpacing
          sx={{
            px: 3,
            pb: 3,
            gap: 1,
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "stretch", sm: "center" },
          }}
        >
          <Button
            onClick={copyEmail}
            variant="outlined"
            color="secondary"
          >
            Скопировать email
          </Button>
          <Button
            href={CONTACT_HREF}
            variant="contained"
            color="secondary"
          >
            Написать письмо
          </Button>
          <Button
            onClick={() => setOpen(false)}
            color="secondary"
          >
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </ProjectContactContext.Provider>
  );
}

export function ProjectButton({
  sx,
  children = PROJECT_CONTACT_ENABLED ? "Обсудить проект" : "Временно недоступно",
  onClick,
  disabled,
  ...props
}: Omit<ButtonProps, "href">) {
  const openContact = useContext(ProjectContactContext);

  if (!openContact) {
    throw new Error("ProjectButton must be used within ProjectContactProvider");
  }

  return (
    <Button
      variant="contained"
      type="button"
      aria-haspopup={PROJECT_CONTACT_ENABLED ? "dialog" : undefined}
      {...props}
      disabled={!PROJECT_CONTACT_ENABLED || disabled}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) {
          openContact();
        }
      }}
      sx={[
        {
          alignSelf: "flex-start",
          fontSize: { xs: 16, md: 20 },
          minHeight: { xs: 42, md: 56 },
          px: { xs: 2.5, md: 3.5 },
          py: { xs: 1.5, md: 2.25 },
          "&.Mui-disabled": {
            color: "text.secondary",
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Button>
  );
}
