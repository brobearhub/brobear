"use client";

import { useState } from "react";
import { Box, Button, ButtonBase, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";
import { ProjectButton, SiteContainer } from "@/shared/ui/site";

const PROJECT_STATUS = {
  DONE: 3,
  DEVELOPMENT: 2,
  NEXT: 1,
  PENDING: 0,
} as const;

const PROJECT_STATUS_DISPLAY = {
  [PROJECT_STATUS.DONE]: { color: "success.main", label: "Готов" },
  [PROJECT_STATUS.DEVELOPMENT]: { color: "primary.main", label: "В разработке" },
  [PROJECT_STATUS.NEXT]: { color: "info.main", label: "Следующий" },
  [PROJECT_STATUS.PENDING]: { color: "grey.600", label: "В очереди" },
} as const;

const PROJECTS = [
  { title: "zemledel.ru", description: "Платформа земельных и кадастровых услуг", status: PROJECT_STATUS.DEVELOPMENT, link: "https://zemledel.ru" },
  { title: "post***.ru", description: "Сервис постинга", status: PROJECT_STATUS.NEXT },
  { title: "med****le.ru", description: "Сервис рекламы и аналитики", status: PROJECT_STATUS.PENDING },
  { title: "pa****y.ru", description: "Сервис покупок", status: PROJECT_STATUS.PENDING },
  { title: "video****.ru", description: "Видео платформа для образования", status: PROJECT_STATUS.PENDING },
  { title: "invest*****.ru", description: "Платформа для инвестиций", status: PROJECT_STATUS.PENDING },
  { title: "hr***.ru", description: "HR-платформа", status: PROJECT_STATUS.PENDING },
  { title: "you***e.ru", description: "Социальный проект", status: PROJECT_STATUS.PENDING },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[number] | null>(null);

  return (
    <Box component="section" id="projects" aria-labelledby="projects-title">
      <SiteContainer sx={{ py: { xs: 6, lg: 9 } }}>
        <Stack spacing={{ xs: 3.5, lg: 4.75 }}>
          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            spacing={3.5}
            sx={{
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "baseline" },
            }}
          >
            <Typography
              component="h2"
              id="projects-title"
              variant="h2"
              sx={{
                fontSize: { xs: 36, md: 46, lg: 56 },
                lineHeight: 1.1,
              }}
            >
              Наши проекты
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: 14,
                lineHeight: 1.1,
              }}
            >
              03 / ПОРТФОЛИО
            </Typography>
          </Stack>
          <Box sx={{ height: "1px", bgcolor: "divider" }} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" },
              gap: 3,
            }}
          >
            {PROJECTS.map((project, index) => (
              <ButtonBase
                key={project.title}
                onClick={() => setSelectedProject(project)}
                aria-label={`О проекте ${project.title}: ${project.description}. Статус: ${PROJECT_STATUS_DISPLAY[project.status].label}`}
                sx={{
                  minWidth: 0,
                  minHeight: 210,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  justifyContent: "flex-start",
                  p: "26px",
                  textAlign: "left",
                  bgcolor: "background.paper",
                  border: 1,
                  borderColor: "divider",
                  borderRadius: "4px",
                  transition: "border-color 160ms ease, transform 160ms ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    transform: "translateY(-3px)",
                  },
                  "&.Mui-focusVisible": {
                    outline: "2px solid",
                    outlineColor: "info.main",
                    outlineOffset: 4,
                  },
                }}
              >
                <Stack
                  direction="row"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    minHeight: 29,
                    mb: "60px",
                  }}
                >
                  <Typography sx={{ color: "text.secondary", fontSize: 14, lineHeight: 1.1 }}>
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Stack
                    component="span"
                    direction="row"
                    spacing={1}
                    aria-hidden="true"
                    sx={{
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        color: "text.secondary",
                        fontSize: 14,
                        lineHeight: 1.1,
                      }}
                    >
                      {PROJECT_STATUS_DISPLAY[project.status].label}
                    </Typography>
                    <Box
                      component="span"
                      sx={{
                        width: 16,
                        height: 16,
                        flexShrink: 0,
                        bgcolor: PROJECT_STATUS_DISPLAY[project.status].color,
                      }}
                    />
                  </Stack>
                </Stack>
                <Typography
                  component="h3"
                  sx={{
                    fontSize: 31,
                    fontWeight: 700,
                    lineHeight: 1.1,
                    mb: 2.5,
                  }}
                >
                  {project.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.1 }}>
                  {project.description}
                </Typography>
              </ButtonBase>
            ))}
          </Box>
        </Stack>
      </SiteContainer>

      <Dialog
        open={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        aria-labelledby="project-dialog-title"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="project-dialog-title">{selectedProject?.title}</DialogTitle>
        <DialogContent>
          <Typography sx={{ color: "text.secondary", mb: 2 }}>
            {selectedProject?.description}
          </Typography>
          <Typography>Нужно похожее решение для вашего бизнеса? Давайте обсудим вашу задачу.</Typography>
        </DialogContent>
        <DialogActions sx={{ p: 3, flexWrap: "wrap", gap: 1 }}>
          <Button onClick={() => setSelectedProject(null)} color="secondary">Закрыть</Button>
          <ProjectButton onClick={() => setSelectedProject(null)} />
        </DialogActions>
      </Dialog>
    </Box>
  );
}

