import type { Metadata } from "next";
import { Playfair_Display, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "VALEUR | Value is not declared. It is recognized.",
  description:
    "VALEUR is a luxury leather goods house built on intrinsic value. No logos. No spectacle. No trend language.",
  keywords: [
    "luxury bag",
    "VALEUR",
    "intrinsic value",
    "Italian leather",
    "quiet luxury",
    "minimalist bag",
    "transformable bag",
  ],
  authors: [{ name: "VALEUR" }],
  openGraph: {
    title: "VALEUR | Value is not declared. It is recognized.",
    description:
      "VALEUR is a luxury leather goods house built on intrinsic value. No logos. No spectacle. No trend language.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${spaceMono.variable} antialiased`}
        style={{
          fontFamily: "var(--font-space-mono), 'Space Mono', monospace",
        }}
      >
        {children}
      </body>
    </html>
  );
}
