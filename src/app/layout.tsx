import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "SAI Intelligence Tech Group | Redefining Intelligence through Ecosystems",
  description:
    "A multi-disciplinary tech group building the next generation of AI-driven platforms.",
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
