import { Box, Stack, Typography } from "@mui/material";
import { ProjectButton, SiteContainer } from "@/shared/ui/site";
import { PROJECT_CONTACT_ENABLED } from "@/shared/constants/site";

export function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      aria-labelledby="contact-title"
      sx={{
        bgcolor: PROJECT_CONTACT_ENABLED ? "primary.main" : "#2b1f1e",
        transition: "background-color 200ms ease",
        "@media (hover: hover)": {
          "&:hover": {
            bgcolor: "primary.main",
            "& #contact-title, & #contact-unavailable-note": {
              color: "primary.contrastText",
            },
            "& .MuiButton-root.Mui-disabled": {
              bgcolor: "rgba(0, 0, 0, 0.24)",
              color: "primary.contrastText",
            },
          },
        },
      }}
    >
      <SiteContainer sx={{ py: { xs: 6, lg: 8 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Typography
            component="h2"
            id="contact-title"
            sx={{
              fontSize: { xs: 42, md: 56, lg: 65 },
              fontWeight: 900,
              lineHeight: 1,
              color: PROJECT_CONTACT_ENABLED ? "text.primary" : "text.secondary",
            }}
          >
            Есть задача?<br />Давайте решим.
          </Typography>
          <Stack
            spacing={1.5}
            sx={{
              maxWidth: 340,
              alignItems: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <ProjectButton
              color="secondary"
              aria-describedby={!PROJECT_CONTACT_ENABLED ? "contact-unavailable-note" : undefined}
              sx={{
                alignSelf: { xs: "flex-start", md: "flex-end" },
              }}
            />
            {!PROJECT_CONTACT_ENABLED && (
              <Typography
                id="contact-unavailable-note"
                variant="body2"
                sx={{
                  color: "text.secondary",
                  textAlign: { xs: "left", md: "right" },
                }}
              >
                Приём заявок временно недоступен
              </Typography>
            )}
          </Stack>
        </Stack>
      </SiteContainer>
    </Box>
  );
}
