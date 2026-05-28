"use client";

import { Box, Chip, Container, Paper, Stack, Tooltip, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import type { ReactNode } from "react";

type ColorSwatchProps = {
  label: string;
  value: string;
  textColor?: string;
  meta?: string;
};

function ColorSwatch({ label, value, textColor, meta }: ColorSwatchProps) {
  const tooltipTitle = (
    <Stack spacing={0.25} sx={{ py: 0.25 }}>
      <Typography variant="caption" sx={{ fontWeight: 900 }}>
        {label}
      </Typography>
      <Typography
        variant="caption"
        sx={{
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          opacity: 0.95,
        }}
      >
        {value}
      </Typography>
      {meta ? (
        <Typography variant="caption" sx={{ opacity: 0.85 }}>
          {meta}
        </Typography>
      ) : null}
    </Stack>
  );

  return (
    <Tooltip title={tooltipTitle} arrow placement="top">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          minWidth: 0,
          p: 1,
          borderRadius: 2,
          border: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{
            width: 34,
            height: 34,
            borderRadius: 999,
            bgcolor: value,
            border: 1,
            borderColor: "divider",
            display: "grid",
            placeItems: "center",
            flex: "0 0 auto",
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 900,
              fontSize: 10,
              lineHeight: 1,
              color: textColor ?? "inherit",
              userSelect: "none",
              opacity: 0.92,
            }}
          >
            Aa
          </Typography>
        </Box>

        <Stack spacing={0} sx={{ minWidth: 0 }}>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 900,
              lineHeight: 1.2,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            title={label}
          >
            {label}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              opacity: 0.8,
              lineHeight: 1.2,
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
            title={value}
          >
            {value}
          </Typography>
        </Stack>
      </Box>
    </Tooltip>
  );
}

type ColorGridProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
};

function ColorGrid({ title, subtitle, children }: ColorGridProps) {
  return (
    <Stack spacing={1.5}>
      <Stack spacing={0.25}>
        <Typography variant="h3" component="h2" sx={{ textTransform: "uppercase" }}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        ) : null}
      </Stack>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0, 1fr))",
            sm: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
            xl: "repeat(5, minmax(0, 1fr))",
          },
          gap: 1.25,
        }}
      >
        {children}
      </Box>
    </Stack>
  );
}

export default function ThemesPage() {
  const theme = useTheme();
  const contrast = (color: string) => theme.palette.getContrastText(color);

  const breakpointKeys = ["xs", "sm", "md", "lg", "xl"] as const;
  const isUpXs = useMediaQuery(theme.breakpoints.up("xs"));
  const isUpSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isUpMd = useMediaQuery(theme.breakpoints.up("md"));
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isUpXl = useMediaQuery(theme.breakpoints.up("xl"));

  const currentBreakpoint = isUpXl ? "xl" : isUpLg ? "lg" : isUpMd ? "md" : isUpSm ? "sm" : isUpXs ? "xs" : "xs";

  const statusPalettes = [
    { key: "primary", label: "Primary" },
    { key: "secondary", label: "Secondary" },
    { key: "error", label: "Error" },
    { key: "warning", label: "Warning" },
    { key: "info", label: "Info" },
    { key: "success", label: "Success" },
  ] as const;

  const greyKeys = [
    50, 100, 200, 300, 400, 500, 600, 700, 800, 900, "A100", "A200", "A400", "A700",
  ] as const;

  return (
    <Box sx={{ width: "100%", bgcolor: "background.default", color: "text.primary" }}>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <Stack spacing={{ xs: 4, md: 6 }}>
          <ColorGrid title="Палитра" subtitle="Основные цвета из theme.palette (включая дефолтные MUI).">
            {statusPalettes.map(({ key, label }) => {
              const p = theme.palette[key];
              return (
                <ColorSwatch
                  key={`${key}-main`}
                  label={`${label} / main`}
                  value={p.main}
                  textColor={p.contrastText}
                  meta={`contrastText: ${p.contrastText}`}
                />
              );
            })}

            {statusPalettes.map(({ key, label }) => {
              const p = theme.palette[key];
              return (
                <ColorSwatch
                  key={`${key}-light`}
                  label={`${label} / light`}
                  value={p.light}
                  textColor={p.contrastText}
                  meta={`contrastText: ${p.contrastText}`}
                />
              );
            })}

            {statusPalettes.map(({ key, label }) => {
              const p = theme.palette[key];
              return (
                <ColorSwatch
                  key={`${key}-dark`}
                  label={`${label} / dark`}
                  value={p.dark}
                  textColor={p.contrastText}
                  meta={`contrastText: ${p.contrastText}`}
                />
              );
            })}

            <ColorSwatch
              label="Background / default"
              value={theme.palette.background.default}
              textColor={contrast(theme.palette.background.default)}
            />
            <ColorSwatch
              label="Background / paper"
              value={theme.palette.background.paper}
              textColor={contrast(theme.palette.background.paper)}
            />

            <ColorSwatch
              label="Text / primary"
              value={theme.palette.text.primary}
              textColor={contrast(theme.palette.text.primary)}
            />
            <ColorSwatch
              label="Text / secondary"
              value={theme.palette.text.secondary}
              textColor={contrast(theme.palette.text.secondary)}
            />

            <ColorSwatch label="Divider" value={theme.palette.divider} textColor={contrast(theme.palette.divider)} />
            <ColorSwatch label="Common / white" value={theme.palette.common.white} textColor={contrast(theme.palette.common.white)} />
            <ColorSwatch label="Common / black" value={theme.palette.common.black} textColor={contrast(theme.palette.common.black)} />
          </ColorGrid>

          <ColorGrid title="Grey scale" subtitle="theme.palette.grey (шкала серого MUI).">
            {greyKeys.map((k) => (
              <ColorSwatch
                key={`grey-${k}`}
                label={`Grey / ${String(k)}`}
                value={theme.palette.grey[k]}
                textColor={contrast(theme.palette.grey[k])}
              />
            ))}
          </ColorGrid>

          <Stack spacing={1.5}>
            <Typography variant="h3" component="h2" sx={{ textTransform: "uppercase" }}>
              Breakpoints
            </Typography>

            <Paper variant="outlined" sx={{ p: 2.5, borderRadius: 3 }}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", alignItems: "center" }}>
                  <Typography variant="body2" sx={{ fontWeight: 800 }}>
                    Активный брейкпоинт:
                  </Typography>
                  <Chip label={currentBreakpoint} color="primary" />
                </Stack>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))", md: "repeat(5, minmax(0, 1fr))" },
                    gap: 1.5,
                  }}
                >
                  {breakpointKeys.map((k) => (
                    <Paper
                      key={k}
                      variant="outlined"
                      sx={{
                        p: 1.5,
                        borderRadius: 2.5,
                        bgcolor: currentBreakpoint === k ? "primary.main" : "background.paper",
                        color: currentBreakpoint === k ? "primary.contrastText" : "text.primary",
                        borderColor: currentBreakpoint === k ? "primary.main" : "divider",
                      }}
                    >
                      <Typography variant="body2" sx={{ fontWeight: 900, textTransform: "uppercase" }}>
                        {k}
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: 0.8 }}>
                        {theme.breakpoints.values[k]}px
                      </Typography>
                    </Paper>
                  ))}
                </Box>

                <Stack spacing={0.5}>
                  <Typography variant="body2" sx={{ fontWeight: 800 }}>
                    Media queries (up):
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.85, fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
                    xs: {theme.breakpoints.up("xs")}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.85, fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
                    sm: {theme.breakpoints.up("sm")}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.85, fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
                    md: {theme.breakpoints.up("md")}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.85, fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
                    lg: {theme.breakpoints.up("lg")}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.85, fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" }}>
                    xl: {theme.breakpoints.up("xl")}
                  </Typography>
                </Stack>
              </Stack>
            </Paper>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
