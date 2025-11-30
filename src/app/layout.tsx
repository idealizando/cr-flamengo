import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

import Navbar from "@/components/Navbar";

function Footer() {
  return (
    <footer className="bg-black text-white py-4 text-center text-sm border-t border-red-700">
      © 2025 Flamengo Verso - Todos os direitos reservados. |{" "}
      <Link href="/sobre" className="underline hover:text-gray-300">Sobre</Link> |{" "}
      <Link href="/privacidade" className="underline hover:text-gray-300">Política de Privacidade</Link> |{" "}
      <Link href="/termos" className="underline hover:text-gray-300">Termos de Uso</Link>
    </footer>
  );
}

export const metadata: Metadata = {
  title: "Flamengo Verso - O Mundo do Flamengo",
  description: "Notícias, produtos, NFTs e Fantasy Game do Flamengo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body
        className="bg-cover bg-center text-white flex flex-col min-h-screen"
        style={{
          backgroundImage: "url('/images/custom-banner.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <Navbar />
        <main className="container mx-auto px-4 py-6 flex-grow">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
