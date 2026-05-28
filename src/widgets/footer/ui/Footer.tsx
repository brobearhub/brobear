import { Box, Container, Typography } from "@mui/material";

type FooterProps = {
  text?: string;
};

export function Footer({ text = '©2026 OOO "Бурый медведь" Все права защищены. Центр разработки и автоматизации бизнеса' }: FooterProps) {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        borderTop: 1,
        borderColor: "divider",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Container maxWidth="xl" sx={{ py: 2.5 }}>
        <Typography
          variant="body2"
          color="secondary"
          sx={{ opacity: 0.8, textAlign: "center" }}
        >
          {text}
        </Typography>
      </Container>
    </Box>
  );
}

