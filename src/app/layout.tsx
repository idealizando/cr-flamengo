import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";


function Navbar() {
  return (
      <header className="sticky top-0 left-0 w-full z-50 bg-red-700/90 backdrop-blur-sm shadow-md">
          <meta name="google-adsense-account" content="ca-pub-3458489837498636"/>
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              {/* Logo + Título */}
              <div className="flex items-center gap-2">
                  {/* Se quiser usar logo, adicione a imagem abaixo no /public/logo.png */}
                  {/* <img src="/logo.png" alt="Logo" className="w-8 h-8 hidden sm:block" /> */}
                  <h1 className="text-xl font-bold tracking-wide">Flamengo Verso</h1>
              </div>

              {/* Menu de Navegação */}
              <ul className="hidden md:flex gap-6 text-sm font-medium">
                  <li><Link href="/noticias" className="hover:underline">Notícias</Link></li>
                  <li><Link href="/sobre" className="hover:underline">Sobre</Link></li>
                  <li><Link href="/blog" className="hover:underline">Blog</Link></li>

                  {/*<li><Link href="/loja" className="hover:underline">Loja</Link></li>
          <li><Link href="/clubevip" className="hover:underline">Clube VIP</Link></li>
          <li><Link href="/fantasy" className="hover:underline">Fantasy Game</Link></li>
          <li><Link href="/nfts" className="hover:underline">NFTs</Link></li>*/}
              </ul>

              {/* Ações (Entrar / Cadastrar) */}
              <div className="flex gap-4 items-center text-sm">
                  <Link href="/login" className="hover:underline">Entrar</Link>
                  <Link
                      href="/cadastro"
                      className="bg-white text-red-700 font-semibold px-3 py-1 rounded hover:bg-gray-100 transition"
                  >
                      Cadastrar
                  </Link>
              </div>
          </div>
      </header>
  );
}

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
