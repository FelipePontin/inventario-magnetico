import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Deck Magnético Clash Royale - Monte seu deck na vida real",
  description:
    "Crie, organize e exiba seu deck do Clash Royale fora das telas! O Deck Magnético é o presente perfeito para fãs do jogo: ímãs de alta qualidade, coloridos e resistentes, para decorar e se divertir na vida real.",
  keywords: [
    "Clash Royale",
    "deck magnético",
    "ímãs clash royale",
    "cartas clash royale",
    "presente para gamers",
    "presentes criativos",
    "colecionáveis clash royale",
    "decoração gamer",
    "itens geek",
    "deck de cartas clash royale",
    "íman de geladeira clash royale",
    "produtos clash royale",
    "inventario magnetico",
    "cartas clash royale",
    "tiktok magnetico",
    "ima geladeira",
    "decoração geladeira",
  ],
  authors: [{ name: "Felipe Panebianco Pontin" }],
  creator: "Felipe Panebianco Pontin",
  publisher: "Inventario Magnetico",
  openGraph: {
    title: "Deck Magnético Clash Royale - Traga a Arena para Sua Casa",
    description:
      "Monte seu deck do Clash Royale na vida real! Ímãs colecionáveis com design incrível e qualidade premium. Ideal para presentear fãs e decorar com estilo gamer.",
    url: "https://inventariomagnetico.com.br",
    siteName: "Deck Magnético Clash Royale",
    images: [
      {
        url: "/og-image-clashroyale.jpg",
        width: 1200,
        height: 630,
        alt: "Deck Magnético Clash Royale - Ímãs colecionáveis",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deck Magnético Clash Royale - Traga a Arena para Sua Casa",
    description:
      "Transforme sua geladeira ou quadro em uma arena de batalhas épicas! O Deck Magnético Clash Royale é o presente ideal para gamers e colecionadores.",
    images: ["/og-image-clashroyale.jpg"],
    creator: "@inventariomagnetico",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://inventariomagnetico.com.br",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
