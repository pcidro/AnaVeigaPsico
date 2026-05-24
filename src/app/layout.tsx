import type { Metadata } from "next";
import { inter, playfair } from "./fonts";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://anaveigapsico.vercel.app"),
  title: {
    default: "Ana Veiga | Psicanalista",
    template: "%s | Ana Veiga Psicanalista",
  },
  description: "Você não precisa carregar tudo sozinha.",
  openGraph: {
    title: "Ana Veiga | Psicanalista",
    description: "Você não precisa carregar tudo sozinha.",
    url: "/",
    siteName: "Ana Veiga Psicanalista",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Logo Ana Veiga Psicanalista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Veiga | Psicanalista",
    description: "Você não precisa carregar tudo sozinha.",
    images: ["/web-app-manifest-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  keywords: [
    "psicanalista",
    "terapia online",
    "saúde mental",
    "ansiedade",
    "relacionamentos",
    "terapeuta materna",
    "terapeuta ",
    "terapia na gestacao",
  ],
  category: "Psicologia",
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
