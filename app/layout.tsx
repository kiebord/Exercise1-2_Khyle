import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// JetBrains Mono, exposed as a CSS variable that Tailwind's font-mono reads
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Khyle Guadalquiver | Junior full-stack developer",
    template: "%s | Khyle Guadalquiver",
  },
  description:
    "Portfolio of Khyle Guadalquiver, a junior full-stack developer building fast, clean web apps with Next.js, TypeScript and Node.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mono.variable}>
      <body className="flex min-h-screen flex-col font-mono">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
