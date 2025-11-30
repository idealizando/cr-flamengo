"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Mock de fotos
const photos = [
    { id: 1, src: "https://images.unsplash.com/photo-1504159506876-f8338247a14a?q=80&w=2070&auto=format&fit=crop", caption: "Maracanã Lotado", user: "João Silva" },
    { id: 2, src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop", caption: "Final da Liberta", user: "Maria Souza" },
    { id: 3, src: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2831&auto=format&fit=crop", caption: "Zico Eterno", user: "Pedro Santos" },
    { id: 4, src: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop", caption: "Festa na Favela", user: "Ana Lima" },
    { id: 5, src: "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?q=80&w=2070&auto=format&fit=crop", caption: "Dia de Jogo", user: "Carlos Oliveira" },
    { id: 6, src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2070&auto=format&fit=crop", caption: "Raça, Amor e Paixão", user: "Fernanda Costa" },
];

export default function MuralPage() {
    const [isUploading, setIsUploading] = useState(false);

    const handleUpload = () => {
        setIsUploading(true);
        setTimeout(() => {
            setIsUploading(false);
            alert("Foto enviada para aprovação! Em breve aparecerá no mural.");
        }, 2000);
    };

    return (
        <div className="min-h-screen text-white py-12 px-4 flex flex-col items-center">
            <Link href="/torcida" className="mb-8 text-gray-400 hover:text-white transition-colors">
                &larr; Voltar para Área da Torcida
            </Link>

            <div className="w-full max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-purple-500">Varal da Torcida 📸</h1>
                        <p className="text-gray-400">Onde a Nação se encontra.</p>
                    </div>
                    <button
                        onClick={handleUpload}
                        disabled={isUploading}
                        className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all flex items-center gap-2"
                    >
                        {isUploading ? "Enviando..." : "📷 Enviar minha foto"}
                    </button>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {photos.map((photo) => (
                        <div key={photo.id} className="break-inside-avoid bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-900/20 transition-all duration-300 group">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={photo.src}
                                    alt={photo.caption}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <p className="font-semibold text-white">{photo.caption}</p>
                                <p className="text-xs text-gray-500 mt-1">Enviado por {photo.user}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
