import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./index.css";
import { LanguageProvider } from "../contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova Tech - Portfolio",
  description: "Desenvolvedor Full-Stack especializado em tecnologias emergentes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <Header />
          {children} {/* Conteúdo específico de cada página */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
