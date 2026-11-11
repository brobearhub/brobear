import { Box, Stack, Typography } from "@mui/material";
import { SectionLabel, SiteContainer } from "@/shared/ui/site";

const SERVICES = [
  {
    title: "Веб-приложения",
    description: "От идеи до работающего сервиса. Удобно пользователю, выгодно бизнесу.",
  },
  {
    title: "CRM и автоматизация",
    description: "Объединяем процессы, данные и команду в одной системе.",
  },
  {
    title: "AI-решения",
    description: "Встраиваем искусственный интеллект в реальные задачи компании.",
  },
];

export function About() {
  return (
    <Box component="section" id="about" aria-labelledby="about-title">
      <SiteContainer sx={{ py: { xs: 6, lg: 9 } }}>
        <Stack spacing={{ xs: 3.5, lg: 5.5 }}>
          <SectionLabel>01 / ЧТО МЫ ДЕЛАЕМ</SectionLabel>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.4fr 1fr" },
              gap: { xs: 3.5, lg: 10 },
            }}
          >
            <Typography
              component="h2"
              id="about-title"
              variant="h2"
              sx={{
                fontSize: { xs: 36, md: 46, lg: 53 },
              }}
            >
              Автоматизация бизнеса.<br />Разработка IT-решений
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: 18, lg: 22 },
                lineHeight: 1.45,
              }}
            >
              Создаём системы автоматизации, CRM-платформы, веб-приложения и AI-решения для развития бизнеса.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(3, minmax(0, 1fr))" },
              gap: 3,
            }}
          >
            {SERVICES.map((service, index) => (
              <Stack
                component="article"
                key={service.title}
                spacing={2.5}
                sx={{
                  minWidth: 0,
                  minHeight: { md: 250 },
                  p: { xs: 3, lg: 4 },
                  bgcolor: "background.paper",
                  border: 1,
                  borderColor: "divider",
                  borderRadius: "6px",
                }}
              >
                <Typography
                  sx={{
                    color: "primary.main",
                    fontSize: 15,
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Stack spacing={1.5}>
                  <Typography
                    component="h3"
                    variant="h3"
                    sx={{
                      fontSize: { xs: 26, lg: 32 },
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: { xs: 18, lg: 19 },
                      lineHeight: 1.4,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Box>
        </Stack>
      </SiteContainer>
    </Box>
  );
}

