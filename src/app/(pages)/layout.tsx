import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";

import ThemeScript from "@/app/lib/utils/ThemeScript";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aeri UI",
  description: "free, copy-paste components built for react.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} bg-background text-foreground stroke-foreground selection:bg-accent/50 scroll-smooth antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
