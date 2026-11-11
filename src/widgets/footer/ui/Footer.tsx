import { Box, Link, Stack, Typography } from "@mui/material";
import { SiteContainer } from "@/shared/ui/site";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#070707",
      }}
    >
      <SiteContainer sx={{ py: 3.5 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            color: "text.secondary",
            fontSize: 16,
            lineHeight: 1.1,
          }}
        >
          <Typography sx={{ fontSize: "inherit", lineHeight: "inherit" }}>
            © {new Date().getFullYear()} ООО «Бурый Медведь»{" "}
            <Box
              component="span"
              sx={{
                whiteSpace: "nowrap",
              }}
            >
              ОГРН 1269600017026
            </Box>
          </Typography>
          <Typography sx={{ fontSize: "inherit", lineHeight: "inherit" }}>
            Разработка и автоматизация бизнеса
          </Typography>
          <Link
            href="/"
            color="text.primary"
            underline="hover"
            sx={{
              fontSize: "inherit",
              fontWeight: 700,
            }}
          >
            brobear.ru
          </Link>
        </Stack>
      </SiteContainer>
    </Box>
  );
}

