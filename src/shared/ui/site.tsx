import { Container, Typography } from "@mui/material";
import type { ContainerProps } from "@mui/material";
import type { ReactNode } from "react";

export { ProjectButton } from "./ProjectContact";

export function SiteContainer({ children, sx, ...props }: ContainerProps) {
  return (
    <Container
      maxWidth={false}
      {...props}
      sx={[
        {
          width: "100%",
          maxWidth: 1440,
          px: { xs: 3, sm: 5, lg: 8 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Container>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <Typography
      component="p"
      sx={{
        color: "info.main",
        fontSize: { xs: 12, md: 13 },
        lineHeight: 1.25,
      }}
    >
      {children}
    </Typography>
  );
}
