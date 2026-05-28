import { Hero } from "@/widgets/hero";
import { About } from "@/widgets/about";
import { Projects } from "@/widgets/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Разработка и автоматизация бизнеса",
  description:
    "Разрабатываем веб‑приложения, CRM и AI‑решения для автоматизации бизнеса. Аналитика, UX, разработка и внедрение.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Бурый Медведь — разработка и автоматизация бизнеса",
    description:
      "Веб‑приложения, CRM и AI‑решения для цифровизации бизнеса. Удобно пользователю. Выгодно бизнесу.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}
