import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

type AboutProps = {
  title?: string;
  text?: string;
};

export function About({
  title = "Автоматизация бизнеса. Разработка IT-решений",
  text = "Создаем системы автоматизации, CRM-платформы, веб-приложения и AI-решения для цифровизации и развития бизнеса.",
}: AboutProps) {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        width: "100%",
        bgcolor: "background.default",
        color: "text.primary",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack
          direction="column"
          spacing={{ xs: 4, md: 8 }}
          sx={{
            maxWidth: 1160,
            width: "100%",
            mx: "auto",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image
                  src="/footprint-transparent-white-stripe.webp"
                  alt="Логотип «Бурый Медведь»"
                  width={128}
                  height={128}
                  style={{ width: "200px", height: "auto" }}
                />
              </Box>
          <Stack
            spacing={3}
            sx={{
              maxWidth: 920,
              width: "100%",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              color="primary"
              sx={{
                fontWeight: 800,
                letterSpacing: -0.5,
                textWrap: "balance",
                textTransform: "uppercase",
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: 16, md: 18 },
                lineHeight: 1.7,
                opacity: 0.86,
                textWrap: "pretty",
                maxWidth: 780,
              }}
            >
              {text}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

