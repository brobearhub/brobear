import type { Metadata } from "next";
import { ThemesClient } from "./ThemesClient";

export const metadata: Metadata = {
  title: "Themes (internal)",
  description: "Внутренняя страница для просмотра палитры и брейкпоинтов.",
  alternates: {
    canonical: "/themes",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ThemesPage() {
  return <ThemesClient />;
}
