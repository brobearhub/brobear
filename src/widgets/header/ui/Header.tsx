"use client";

import { Box, Container, Stack, Typography, useScrollTrigger } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";

const HEADER_HEIGHT = 88;

export function Header() {
  const theme = useTheme();
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return (
    <Box
      component="header"
      sx={{
        opacity: scrolled ? 1 : 0,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.appBar,
        height: HEADER_HEIGHT,
        display: "flex",
        alignItems: "center",
        transition: theme.transitions.create(["background-color", "border-color", "box-shadow", "opacity"], {
          duration: theme.transitions.duration.complex,
        }),
        bgcolor: scrolled ? alpha(theme.palette.background.default, 0.7) : "transparent",
        borderBottom: 1,
        borderColor: scrolled ? "divider" : "transparent",
        boxShadow: scrolled ? `0 12px 36px ${alpha("#000", 0.22)}` : "none",
        backdropFilter: scrolled ? "blur(5px)" : "none",
      }}
    >
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2} sx={{ alignItems: "center", justifyContent: "space-between" }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
              minWidth: 0,
            }}
          >
            <Link href="/" aria-label="На главную">
              <Image
                src="/footprint-transparent.webp"
                alt="Логотип «Бурый Медведь»"
                width={50}
                height={50}
                priority
                style={{ width: 50, height: 50 }}
              />
            </Link>

            <Stack spacing={0.25} sx={{ minWidth: 0 }}>
              <Typography variant="h5" sx={{ textTransform: "uppercase", lineHeight: 1.05, fontWeight: 700 }}>
                Бурый Медведь
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: { xs: 10, md: 14 },
                }}
              >
                Центр разработки и автоматизации бизнеса
              </Typography>
            </Stack>
          </Stack>

          <Box />
        </Stack>
      </Container>
    </Box>
  );
}

