import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";

type HeroProps = {
  firstTitle?: string;
  secondTitle?: string;
  subtitle?: string;
  backgroundSrc?: string;
  mobileBackgroundSrc?: string;
};

export function Hero({
  firstTitle = "Бурый",
  secondTitle = "Медведь",
  subtitle = "Удобно пользователю. Выгодно бизнесу.",
  backgroundSrc = "/bg-office-20.webp",
  mobileBackgroundSrc = "/bg-office-mobile.webp",
}: HeroProps) {
  return (
    <Box
      component="section"
      sx={{
        mt: "-88px",
        // pt: "88px",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: {
          xs: `url(${mobileBackgroundSrc})`,
          md: `url(${backgroundSrc})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: { xs: "flex-end", md: "center" },
          justifyContent: { xs: "center", md: "space-between" },
          gap: 4,
          pb: { 
            xs: 2, // 0
            sm: 5, // 600
            md: 0, // 900
            lg: 0, // 1200
            xl: 0, // 1536
          },
          pl: { 
            // xs: 0, // 0
            // sm: 0, // 600
            md: 7, // 900
            lg: 9, // 1200
            xl: 0, // 1536
          },
        }}
      >
        <Stack
              direction="column"
              spacing={2}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Box sx={{ width: { xs: 100, md: 200 } }}>
                <Image
                  src="/footprint-transparent.webp"
                  alt="Логотип «Бурый Медведь»"
                  width={128}
                  height={128}
                  priority
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 900,
                  textWrap: "balance",
                  textTransform: "uppercase",
                  color: "white",
                }}
              >
                <Box component="span" sx={{ color: { xs: "white", md: "primary.main" } }}>
                  {firstTitle}
                </Box>{" "}
                {secondTitle}
              </Typography>
              <Divider
                sx={{
                  width: "100%",
                  borderColor: "primary.main",
                  borderWidth: 3,
                  mt: 2,
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  textWrap: "pretty",
                  fontSize: { xs: 18, md: 24 },
                  fontWeight: 600,
                  textTransform: "uppercase",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {subtitle}
              </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

