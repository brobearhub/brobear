import { alpha, createTheme, darken, lighten } from "@mui/material/styles";
import type { Theme } from "@mui/material/styles";

const primaryMain = "#754a33";
const infoMain = "#5FAEC2";

export const theme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: primaryMain,
      light: lighten(primaryMain, 0.22),
      dark: darken(primaryMain, 0.22),
      contrastText: "#fff7f1",
    },
    secondary: {
      main: "#d3b29a",
      light: "#ead8cb",
      dark: "#b79277",
      contrastText: "#1b120c",
    },
    info: {
      main: infoMain,
      light: lighten(infoMain, 0.22),
      dark: darken(infoMain, 0.22),
      contrastText: "#0f0b09",
    },
    background: {
      default: "#0f0b09",
      paper: "#15100d",
    },
    text: {
      primary: "#f7efe8",
      secondary: alpha("#f7efe8", 0.72),
    },
    divider: alpha("#f7efe8", 0.12),
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "var(--font-sofia-sans), Arial, Helvetica, sans-serif",
    h1: {
      fontWeight: 900,
      letterSpacing: -1.2,
      fontSize: "clamp(40px, 4.2vw, 76px)",
      lineHeight: 0.98,
      textTransform: "uppercase",
    },
    h2: {
      fontWeight: 800,
      letterSpacing: -0.8,
      fontSize: "clamp(22px, 2.2vw, 34px)",
      lineHeight: 1.15,
    },
    h3: {
      fontWeight: 800,
      letterSpacing: -0.6,
      fontSize: "clamp(20px, 1.8vw, 30px)",
      lineHeight: 1.18,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.65,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: `1px solid ${alpha("#f7efe8", 0.08)}`,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18,
          paddingBlock: 10,
          textTransform: "none",
          fontWeight: 700,
          letterSpacing: 0.2,
        },
        contained: {
          boxShadow: `0 12px 28px ${alpha(primaryMain, 0.25)}`,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textUnderlineOffset: 3,
        },
      },
    },
  },
});

