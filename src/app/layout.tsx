import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SAI Vertex | Enterprise Robotics Integration Partner | Central Asia & MENA",
  description:
    "We transform intelligent robots into enterprise-ready business assets through localization, integration, and middleware solutions. Request a pilot consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-black text-gray-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
