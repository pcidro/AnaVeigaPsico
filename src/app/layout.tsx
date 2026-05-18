import type { Metadata } from "next";
import { inter, playfair } from "./fonts";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Ana Veiga | Psicanalista",
  description: "Você não precisa carregar tudo sozinha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
