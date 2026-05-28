import { Box, Container, Stack, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import RateReviewIcon from "@mui/icons-material/RateReview";
import EngineeringIcon from "@mui/icons-material/Engineering";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const PROJECTS = [
  { title: "zemle***.pro", Icon: TravelExploreIcon, color: "#0b5628" },
  { title: "post***.ru", Icon: RateReviewIcon, color: "#f47b0d" },
  { title: "hr***.ru", Icon: EngineeringIcon, color: "#0F3D8A" },
  { title: "you***e.ru", Icon: VolunteerActivismIcon, color: "#d91379" },
] as const;

type ProjectsProps = {
  title?: string;
};

export function Projects({ title = "Наши проекты" }: ProjectsProps) {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        width: "100%",
        bgcolor: "secondary.light",
        color: "text.primary",
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Stack
          direction="column"
          spacing={{ xs: 4, md: 6 }}
          sx={{
            maxWidth: 1160,
            width: "100%",
            mx: "auto",
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
              textAlign: "center",
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
              gap: { xs: 2, md: 3 },
            }}
          >
            {PROJECTS.map((p) => (
              <Box
                key={p.title}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  color: "grey.900",
                  transition: "transform 160ms ease, border-color 160ms ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    color: "primary.main",
                  },
                }}
              >
                <Box
                  sx={{
                    flex: "0 0 auto",
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    display: "grid",
                    placeItems: "center",
                    color: p.color,
                  }}
                >
                  <p.Icon sx={{ fontSize: 44 }} />
                </Box>

                <Typography
                  component="h3"
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: -0.2,
                    textWrap: "balance",
                  }}
                >
                  {p.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

