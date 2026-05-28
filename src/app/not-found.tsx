"use client";

import { Box, Button, Container, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      component="section"
      sx={{
        mt: "-88px",
        pt: "88px",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        backgroundImage: {
          xs: "url(/bg-office-mobile.webp)",
          md: "url(/bg-office-20.webp)",
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1000px 600px at 50% 35%, rgba(15, 11, 9, 0.42), rgba(15, 11, 9, 0.92) 70%)",
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          py: { xs: 6, md: 10 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          spacing={2.5}
          sx={{
            width: "100%",
            maxWidth: 860,
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/footprint-transparent.webp"
            alt="Логотип «Бурый Медведь»"
            width={128}
            height={128}
            priority
            style={{ width: 156, height: "auto" }}
          />

          <Typography
            component="p"
            sx={{
              fontWeight: 900,
              letterSpacing: -1.2,
              fontSize: "clamp(64px, 9vw, 140px)",
              lineHeight: 0.92,
              textTransform: "uppercase",
              color: "primary.main",
            }}
          >
            404
          </Typography>

          <Divider
            sx={{
              width: "min(520px, 100%)",
              borderColor: "primary.main",
              borderWidth: 3,
              opacity: 0.9,
            }}
          />

          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontWeight: 800,
              textTransform: "uppercase",
              textWrap: "balance",
              color: "white",
            }}
          >
            Страница не найдена
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: 16, md: 18 },
              opacity: 0.9,
              textWrap: "pretty",
              maxWidth: 640,
              color: "warning.main",
            }}
          >
            Похоже, вы перешли по неверной ссылке или страница была перенесена.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{ pt: 1, width: "100%", justifyContent: "center" }}
          >
            <Button component={Link} href="/" variant="contained" color="primary">
              На главную
            </Button>
            <Button component={Link} href="/themes" variant="outlined" color="secondary">
              Посмотреть темы
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

