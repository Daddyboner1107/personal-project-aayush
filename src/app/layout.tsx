import type { Metadata, Viewport } from "next";
import {
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  Caveat,
} from "next/font/google";
import { loveContent } from "@/config/love-content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000")
  ),
  title: loveContent.siteMeta.title,
  description: loveContent.siteMeta.description,
  applicationName: "MI AMORE",
  authors: [{ name: loveContent.senderName }],
  keywords: [
    "Mi Amore",
    "love letter",
    "interactive storybook",
    "romantic gift",
  ],
  openGraph: {
    title: loveContent.siteMeta.title,
    description: loveContent.siteMeta.description,
    type: "website",
    locale: "en_US",
    siteName: "MI AMORE",
  },
  twitter: {
    card: "summary_large_image",
    title: loveContent.siteMeta.title,
    description: loveContent.siteMeta.description,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FFF9F4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} ${caveat.variable} h-full`}
    >
      <body className="min-h-dvh bg-[#FFF9F4] text-[#3B262E] antialiased selection:bg-[#F9D5DF] selection:text-[#3B262E]">
        {children}
      </body>
    </html>
  );
}
