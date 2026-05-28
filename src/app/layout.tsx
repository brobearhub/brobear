import type { Metadata, Viewport } from "next";
import { Sofia_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/+$/, "");
const siteName = "Бурый Медведь";
const defaultTitle = `${siteName} — Центр разработки и автоматизации бизнеса`;
const defaultDescription = "Разрабатываем веб‑приложения, CRM и AI‑решения для автоматизации бизнеса. Удобно пользователю. Выгодно бизнесу.";

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const yandexVerification = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION;

const sofiaSans = Sofia_Sans({
  variable: "--font-sofia-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s — ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  manifest: "/manifest.json",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-icon-180x180.png", sizes: "180x180" },
    ],
    shortcut: "/favicon-32x32.png",
    icon: [
      { url: "/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  other: {
    "msapplication-TileColor": "#0f0b09",
    "msapplication-TileImage": "/ms-icon-144x144.png",
  },
  ...(googleVerification || yandexVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(yandexVerification ? { yandex: yandexVerification } : {}),
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#0f0b09",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={sofiaSans.variable}>
      <body className={sofiaSans.className}>
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ООО «Бурый Медведь»",
              url: siteUrl,
              logo: `${siteUrl}/android-icon-192x192.png`,
            }),
          }}
        />
        <Providers>
          <Header />
          <main style={{ flex: 1, display: "flex", flexDirection: "column", paddingTop: 88 }}>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
