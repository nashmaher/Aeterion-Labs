import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Aeterion Labs | Elevating Human Performance Beyond Natural Limits",
  description:
    "Precision-built performance supplements with full transparency. No proprietary blends, no compromises. Pre-workouts, proteins, and performance formulas backed by science.",
  keywords: [
    "supplements",
    "pre-workout",
    "performance",
    "fitness",
    "Aeterion Labs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
