import type {Metadata} from "next";
import "./globals.css";
import {Inter, Manrope} from "next/font/google";

const inter = Inter({subsets: ["latin"], variable: "--font-inter", display: "swap"});
const manrope = Manrope({subsets: ["latin"], variable: "--font-manrope", display: "swap"});

export const metadata: Metadata = {
  title: "Joji Jacob",
  description: "Engineering leader transforming vision into intelligent and scalable systems.",
  metadataBase: new URL("https://jojijacob.com"),
  openGraph: {
    title: "Joji Jacob — Engineering the Future",
    description: "Engineering leader transforming vision into intelligent and scalable systems.",
    url: "https://jojijacob.com",
    siteName: "jojijacob.com",
    images: [{url: "/og-image.jpg", width: 1200, height: 630}],
    type: "website",
  },
  themeColor: "#0ea5a4",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-screen text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 font-sans selection:bg-accent/20 selection:text-neutral-900">{children}</body>
    </html>
  );
}
