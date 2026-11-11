import { createTheme, darken, lighten } from "@mui/material/styles";

export const primaryMain = "#f02c20";
export const infoMain = "#ffc52a";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: primaryMain,
      light: lighten(primaryMain, 0.15),
      dark: darken(primaryMain, 0.15),
      contrastText: "#fff6eb",
    },
    secondary: {
      main: "#f4f0e8",
      light: "#ffffff",
      dark: "#a9a49d",
      contrastText: "#090909",
    },
    info: {
      main: infoMain,
      contrastText: "#090909",
    },
    background: {
      default: "#171717",
      paper: "#222222",
    },
    text: {
      primary: "#f4f0e8",
      secondary: "#a9a49d",
    },
    divider: "#33302d",
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: "var(--font-sofia-sans), Arial, Helvetica, sans-serif",
    h1: {
      fontSize: 136,
      fontWeight: 900,
      lineHeight: 0.96,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: 56,
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: 0,
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: 0,
    },
    body1: {
      fontSize: 19,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: 17,
      lineHeight: 1.4,
    },
    button: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: 0,
      textTransform: "none",
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
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 6,
          padding: "18px 28px",
          minHeight: 56,
          whiteSpace: "nowrap",
        },
        sizeSmall: {
          minHeight: 42,
          padding: "12px 20px",
          fontSize: 16,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textUnderlineOffset: 4,
        },
      },
    },
  },
});

