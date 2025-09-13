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
    <html lang="pt-br" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
