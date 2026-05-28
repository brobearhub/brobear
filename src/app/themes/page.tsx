import type { Metadata } from "next";
import { ThemesClient } from "./ThemesClient";

export const metadata: Metadata = {
  title: "Themes (internal)",
  description: "Внутренняя страница для просмотра палитры и брейкпоинтов.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThemesPage() {
  return <ThemesClient />;
}
