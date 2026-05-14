import { Inter } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nivrix.com";
const publishedAt = "2026-05-14T00:00:00-03:00";
const modifiedAt = "2026-05-14T19:15:00-03:00";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nivrix | Gateway de Pagamentos Moderno e Confiável",
    template: "%s | Nivrix",
  },
  description:
    "Nivrix é um gateway de pagamentos moderno, tecnológico e confiável para empresas digitais, e-commerces e criadores de conteúdo.",
  keywords: [
    "Nivrix",
    "gateway de pagamentos",
    "checkout online",
    "pagamentos digitais",
    "e-commerce",
    "infoprodutos",
    "criadores de conteúdo",
    "API de pagamentos",
    "conversão de checkout",
  ],
  applicationName: "Nivrix",
  authors: [{ name: "Nivrix" }],
  creator: "Nivrix",
  publisher: "Nivrix",
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Nivrix",
    title: "Nivrix | Gateway de Pagamentos Moderno e Confiável",
    description:
      "Gateway de pagamentos para empresas digitais, e-commerces e criadores venderem online com mais fluidez e confiança.",
    images: [
      {
        url: "/assets/nivrix-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nivrix gateway de pagamentos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nivrix",
    title: "Nivrix | Gateway de Pagamentos Moderno e Confiável",
    description:
      "Pagamentos digitais com checkout fluido, integração simples e operação confiável.",
    images: ["/assets/nivrix-og.jpg"],
  },
  other: {
    "article:published_time": publishedAt,
    "article:modified_time": modifiedAt,
    "og:updated_time": modifiedAt,
  },
  icons: {
    icon: "/assets/LOGO.svg",
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
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09a9e6",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
