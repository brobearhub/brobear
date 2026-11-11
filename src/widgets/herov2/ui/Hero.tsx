import { Box, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { SiteContainer } from "@/shared/ui/site";

export function HeroV2() {
  return (
    <Box
      component="section"
      aria-labelledby="hero-title"
      sx={{
        position: "relative",
        minHeight: { xs: "max(844px, 100svh)", md: "max(900px, 100svh)" },
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: { xs: 74, md: 0 },
          left: { xs: "calc(50% - 647px)", md: 0 },
          width: { xs: 890, md: "100%" },
          height: { xs: 501, md: "100%" },
        }}
      >
        <Image
          src="/images/bear-hero.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 899px) 890px, 100vw"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        aria-hidden="true"
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 80%, #171717)",
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          display: { xs: "block", md: "none" },
          position: "absolute",
          top: 444,
          left: 0,
          right: 0,
          height: 400,
          background: "linear-gradient(to bottom, rgba(23,23,23,0), rgba(23,23,23,0.98) 36%, #171717)",
        }}
      />

      <SiteContainer
        sx={{
          position: "relative",
          pt: { xs: "514px", md: "232px" },
          pb: { xs: "92px", md: 12 },
        }}
      >
        <Stack
          spacing={{ xs: 2.125, md: 2.75 }}
          sx={{
            maxWidth: 730,
            alignItems: "flex-start",
          }}
        >
          <Typography
            sx={{
              color: "info.main",
              fontSize: 13,
              lineHeight: 1.25,
            }}
          >
            <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
              ЦЕНТР РАЗРАБОТКИ И АВТОМАТИЗАЦИИ БИЗНЕСА
            </Box>
            <Box component="span" sx={{ display: { xs: "inline", md: "none" } }}>
              РАЗРАБОТКА И АВТОМАТИЗАЦИЯ
            </Box>
          </Typography>
          <Typography
            id="hero-title"
            component="h1"
            variant="h1"
            sx={{
              fontSize: { xs: 55, sm: 72, md: "clamp(86px, 9.445vw, 136px)" },
              lineHeight: { xs: 0.98, md: 0.96 },
            }}
          >
            БУРЫЙ<br />МЕДВЕДЬ
          </Typography>
          <Typography
            sx={{
              color: { xs: "text.primary", md: "text.secondary" },
              fontSize: { xs: 17, md: 25 },
              lineHeight: { xs: 1.25, md: 1.3 },
              whiteSpace: { xs: "normal", md: "nowrap" },
            }}
          >
            Удобно пользователю. Выгодно бизнесу.
          </Typography>
        </Stack>
      </SiteContainer>

      <SiteContainer
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 60 },
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            display: { xs: "none", md: "block" },
            color: "info.main",
            fontSize: 13,
            lineHeight: 1.25,
          }}
        >
          ВЕБ-ПРИЛОЖЕНИЯ&nbsp;&nbsp; / &nbsp;&nbsp;CRM&nbsp;&nbsp; / &nbsp;&nbsp;AI
        </Typography>
        <Link
          href="#about"
          underline="hover"
          sx={{
            color: "text.secondary",
            fontSize: { xs: 11, md: 16 },
            lineHeight: 1.1,
          }}
        >
          <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
            Далее — о нас&nbsp; ↓
          </Box>
          <Box component="span" sx={{ display: { xs: "inline", md: "none" } }}>
            О НАС ↓
          </Box>
        </Link>
      </SiteContainer>
    </Box>
  );
}
