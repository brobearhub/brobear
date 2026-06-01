import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

type HeroProps = {
  firstTitle?: string;
  secondTitle?: string;
  subtitle?: string;
  backgroundSrc?: string;
  mobileBackgroundSrc?: string;
};

export function HeroV2({
  firstTitle = "Бурый",
  secondTitle = "Медведь",
  subtitle = "Удобно пользователю. Выгодно бизнесу.",
  backgroundSrc = "/bg_hero_v2.webp",
  mobileBackgroundSrc = "/bg_hero_v2_mobile.webp",
}: HeroProps) {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: {
          xs: `url(${mobileBackgroundSrc})`,
          lg: `url(${backgroundSrc})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          alignItems: { xs: "flex-end", lg: "center" },
          justifyContent: { xs: "center", lg: "space-between" },
          gap: 4,
          pb: { 
            xs: 2, // 0
            lg: 0, // 1200
            xl: 0, // 1536
          },
          pl: { 
            md: 7, // 900
            lg: 9, // 1200
            xl: 10, // 1536
          },
        }}
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{ 
            alignItems: "center", 
            justifyContent: "center", 
            backgroundColor: { xs: "transparent", lg: "rgba(0, 0, 0, 0.1)" }, 
            backdropFilter: { xs: "none", lg: "blur(2px)" }, 
            p: 4,
          }}
        >
          <Box sx={{ width: { xs: 100, md: 200 }, filter: { xs: "brightness(1.5) drop-shadow(0 0 10px rgba(0, 0, 0, 1))", lg: "none" } }}>
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
              textAlign: "center",
              fontSize: { xs: 32, sm: 40, md: 50, lg: 60, xl: 72 },
            }}
          >
            <Box 
              component="span" 
              sx={{ 
                color: { xs: "white", lg: "primary.main" }, 
                textShadow: { xs: "0 0 10px rgba(0, 0, 0, 0.5)" },
              }}
            >
              {firstTitle}
            </Box>{" "}
            {secondTitle}
          </Typography>
          <Typography
              variant="h2"
              sx={{
                textWrap: "pretty",
                fontSize: { xs: 14, md: 18, lg: 20, xl: 24 },
                fontWeight: { xs: 600, md: 400 },
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
