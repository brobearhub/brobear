"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { ReactNode } from "react";
import { theme } from "@/theme";
import { ProjectContactProvider } from "@/shared/ui/ProjectContact";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProjectContactProvider>{children}</ProjectContactProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
