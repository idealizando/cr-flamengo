"use client";

import React, { useState } from "react";
import Link from "next/link";
import LeadModal from "./LeadModal";

export default function Navbar() {
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

    return (
        <>
            <header className="sticky top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Lado Esquerdo: Logo + Navegação */}
                    <div className="flex items-center gap-12">
                        {/* Logo */}
                        <Link href="/blog" className="group flex items-center gap-2">
                            <div className="w-8 h-8 bg-red-600 rounded-lg rotate-3 group-hover:rotate-6 transition-transform flex items-center justify-center font-bold text-black">
                                F
                            </div>
                            <h1 className="text-xl font-bold tracking-wide text-white group-hover:text-red-500 transition-colors">
                                Flamengo<span className="font-light">Verso</span>
                            </h1>
                        </Link>

                        {/* Menu de Navegação (Desktop) */}
                        <nav className="hidden md:block">
                            <ul className="flex gap-8 text-sm font-medium text-gray-300">
                                <li>
                                    <Link href="/blog" className="hover:text-white transition-colors flex items-center gap-2">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/torcida" className="hover:text-white transition-colors">
                                        Torcida
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/sobre" className="hover:text-white transition-colors">
                                        Sobre
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    {/* Lado Direito: CTA */}
                    <div className="flex items-center">
                        <button
                            onClick={() => setIsLeadModalOpen(true)}
                            className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg hover:shadow-red-900/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group"
                        >
                            <span>Clube VIP</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            <LeadModal
                isOpen={isLeadModalOpen}
                onClose={() => setIsLeadModalOpen(false)}
            />
        </>
    );
}
