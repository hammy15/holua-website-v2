import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "HŌLUA GROUP — Land. Vision. Legacy.",
  description: "Development. Renovation. Hospitality. Micro Resorts. From raw land to unforgettable destinations.",
  openGraph: {
    title: "HŌLUA GROUP — Land. Vision. Legacy.",
    description: "Development. Renovation. Hospitality. Micro Resorts.",
    url: "https://holuagroup.com",
    siteName: "HŌLUA GROUP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-black text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
