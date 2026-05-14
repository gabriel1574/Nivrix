import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Nivrix | Gateway de Pagamentos Moderno e Confiável",
  description:
    "Nivrix é um gateway de pagamentos moderno, tecnológico e confiável para empresas digitais, e-commerces e criadores de conteúdo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
