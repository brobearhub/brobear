"use client";

import { useState } from "react";
import { Box, Button, Drawer, Link as MuiLink, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { SiteContainer } from "@/shared/ui/site";

const NAVIGATION = [
  { label: "О нас", href: "/#about" },
  { label: "Услуги", href: "/services" },
  { label: "Проекты", href: "/#projects" },
  { label: "Подход", href: "/process" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      component="header"
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: { xs: 74, md: 112 },
        display: "flex",
        alignItems: "center",
        bgcolor: "#070707",
      }}
    >
      <SiteContainer>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Stack
            component={Link}
            href="/"
            direction="row"
            spacing={1.5}
            aria-label="Бурый Медведь — на главную"
            sx={{
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <Box
              aria-hidden="true"
              sx={{
                width: { xs: 12, md: 16 },
                height: { xs: 12, md: 16 },
                bgcolor: "primary.main",
              }}
            />
            <Typography
              sx={{
                fontSize: { xs: 17, md: 23 },
                fontWeight: 900,
                lineHeight: 1.1,
                transform: "translateY(0.08em)",
                whiteSpace: "nowrap",
              }}
            >
              БУРЫЙ МЕДВЕДЬ
            </Typography>
          </Stack>

          <Stack
            component="nav"
            aria-label="Основная навигация"
            direction="row"
            spacing={4.75}
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {NAVIGATION.map((item) => (
              <MuiLink
                key={item.href}
                component={Link}
                href={item.href}
                color="inherit"
                underline="hover"
                sx={{
                  fontSize: 18,
                  fontWeight: 500,
                  lineHeight: 1.1,
                }}
              >
                {item.label}
              </MuiLink>
            ))}
          </Stack>

          <Button
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? "mobile-navigation" : undefined}
            onClick={() => setMenuOpen(true)}
            color="secondary"
            sx={{
              display: { xs: "inline-flex", md: "none" },
              minWidth: 44,
              minHeight: 44,
              p: 0,
              fontSize: 12,
            }}
          >
            МЕНЮ
          </Button>
        </Stack>
      </SiteContainer>

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        slotProps={{
          paper: {
            sx: {
              width: "min(340px, 90vw)",
              bgcolor: "background.default",
              p: 3,
            },
          },
        }}
      >
        <Stack spacing={4}>
          <Button
            onClick={() => setMenuOpen(false)}
            aria-label="Закрыть меню"
            color="secondary"
            sx={{
              alignSelf: "flex-end",
              p: 1,
              fontSize: 14,
            }}
          >
            ЗАКРЫТЬ ×
          </Button>
          <Stack
            component="nav"
            id="mobile-navigation"
            aria-label="Мобильная навигация"
            spacing={3}
          >
            {NAVIGATION.map((item) => (
              <MuiLink
                key={item.href}
                component={Link}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                color="inherit"
                underline="hover"
                sx={{
                  fontSize: 30,
                  fontWeight: 700,
                }}
              >
                {item.label}
              </MuiLink>
            ))}
          </Stack>
        </Stack>
      </Drawer>
    </Box>
  );
}

