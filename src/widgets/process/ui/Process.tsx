import { Box, Stack, Typography } from "@mui/material";
import { SectionLabel, SiteContainer } from "@/shared/ui/site";

const STAGES = [
  {
    title: "Понимаем задачу",
    description: "Обсуждаем ваш бизнес и будущих пользователей. Определяем, какую задачу должно решить приложение.",
  },
  {
    title: "Определяем возможности",
    description: "Вместе выбираем, что должно уметь приложение и какие функции нужны в первую очередь.",
  },
  {
    title: "Создаём удобный дизайн",
    description: "Показываем, как будут выглядеть экраны и как ими пользоваться. Согласуем оформление.",
  },
  {
    title: "Продумываем работу приложения",
    description: "Решаем, как хранить данные и связать приложение с нужными вам сервисами.",
  },
  {
    title: "Разрабатываем приложение",
    description: "Создаём функции по частям. Показываем промежуточные результаты и проверяем, что всё работает.",
  },
  {
    title: "Проверяем перед запуском",
    description: "Проверяем основные действия, доступ к данным и работу на телефонах и компьютерах.",
  },
  {
    title: "Запускаем приложение",
    description: "Открываем приложение для пользователей. Проверяем связь с другими сервисами и следим за его работой.",
  },
  {
    title: "Развиваем приложение",
    description: "Узнаём, что удобно пользователям и что стоит улучшить. Вместе выбираем следующие доработки.",
  },
];

export function Process() {
  return (
    <Box component="section" id="approach" aria-labelledby="process-title">
      <SiteContainer sx={{ py: { xs: 6, lg: 9 } }}>
        <Stack spacing={{ xs: 3.5, lg: 5 }}>
          <SectionLabel>02 / КАК МЫ РАБОТАЕМ</SectionLabel>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.85fr 1fr" },
              gap: { xs: 3.5, lg: 10 },
            }}
          >
            <Typography
              id="process-title"
              component="h2"
              variant="h2"
              sx={{
                fontSize: { xs: 36, md: 46, lg: 56 },
              }}
            >
              От вашей задачи —<br />к готовому приложению.
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: 18, lg: 22 },
                lineHeight: { xs: 1.4, lg: 1.45 },
              }}
            >
              На каждом шаге объясняем, что делаем, показываем результат и согласуем следующие действия.
            </Typography>
          </Box>
          <Box
            component="ol"
            sx={{
              listStyle: "none",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" },
              gap: { xs: 0, sm: 3 },
            }}
          >
            {STAGES.map((stage, index) => (
              <Box
                component="li"
                key={stage.title}
                sx={{
                  minWidth: 0,
                  minHeight: { sm: 276 },
                  display: { xs: "grid", sm: "flex" },
                  gridTemplateColumns: "22px minmax(0, 1fr)",
                  flexDirection: "column",
                  gap: { xs: 2.25, sm: 2.5 },
                  px: { xs: 0, sm: "26px" },
                  py: { xs: 3, sm: "26px" },
                  bgcolor: { xs: "transparent", sm: "background.paper" },
                  borderStyle: "solid",
                  borderWidth: { xs: "0 0 1px", sm: "1px" },
                  borderColor: "divider",
                  borderRadius: { xs: 0, sm: "6px" },
                }}
              >
                <Typography
                  aria-hidden="true"
                  sx={{
                    color: "primary.main",
                    fontSize: 15,
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Typography>
                <Stack spacing={{ xs: 1.25, sm: 1.5 }}>
                  <Typography
                    component="h3"
                    variant="h3"
                    sx={{
                      fontSize: { xs: 24, sm: 26 },
                    }}
                  >
                    {stage.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {stage.description}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Box>
          <Stack
            spacing={1.5}
            sx={{
              px: { xs: 3, lg: 4 },
              py: { xs: 3, lg: 3.5 },
              bgcolor: "background.paper",
              borderStyle: "solid",
              borderWidth: { xs: 0, sm: 1 },
              borderColor: "divider",
              borderRadius: "6px",
            }}
          >
            <Typography
              component="h3"
              sx={{
                fontSize: { xs: 24, lg: 26 },
                fontWeight: 700,
                lineHeight: 1.15,
              }}
            >
              Проверяем на каждом этапе.
              <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                {" "}Помогаем после запуска.
              </Box>
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: 17, lg: 19 },
                lineHeight: 1.4,
              }}
            >
              <Box component="span" sx={{ display: { xs: "inline", sm: "none" } }}>После запуска </Box>
              <Box component="span" sx={{ textTransform: { xs: "lowercase", sm: "none" } }}>Следим</Box>
              {" "}за работой приложения, исправляем ошибки и помогаем его улучшать.
            </Typography>
          </Stack>
        </Stack>
      </SiteContainer>
    </Box>
  );
}
