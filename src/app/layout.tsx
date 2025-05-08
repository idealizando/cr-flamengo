import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full py-4 px-6 flex justify-between items-center z-20 bg-transparent text-white">
      {/* Logo */}
      <h1 className="text-2xl font-extrabold text-white tracking-wide">Flamengo Verso</h1>

      {/* Menu de Navegação */}
      <ul className="flex gap-8 text-lg font-medium">
        <li><Link href="/noticias" className="hover:text-red-500">Notícias</Link></li>
        <li><Link href="/loja" className="hover:text-red-500">Loja</Link></li>
        <li><Link href="/clubevip" className="hover:text-red-500">Clube VIP</Link></li>
        <li><Link href="/fantasy" className="hover:text-red-500">Fantasy Game</Link></li>
        <li><Link href="/nfts" className="hover:text-red-500">NFTs</Link></li>
      </ul>

      {/* Ações (Entrar / Cadastrar) */}
      <div className="flex gap-6 items-center">
        <Link href="/login" className="text-white font-medium hover:text-red-500">Entrar</Link>
        <Link href="/cadastro" className="bg-red-600 text-white px-5 py-2 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-red-700">
          Cadastrar
        </Link>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-4 text-center">
      © 2025 Flamengo Verso - Todos os direitos reservados.
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
          backgroundAttachment: "fixed", // 🔥 Mantém o fundo fixo
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <main className="container mx-auto px-4 py-6 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}