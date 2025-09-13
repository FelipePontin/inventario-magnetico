import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Inventário Magnético - Monte seu inventário do Minecraft na vida real",
  description: "",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
