"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BlogPost } from "@/data/posts";

export default function AdminPage() {
    const [context, setContext] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedPost, setGeneratedPost] = useState<BlogPost | null>(null);

    const handleGenerate = async () => {
        if (!context) return;

        setIsGenerating(true);
        setGeneratedPost(null);

        try {
            const response = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ context }),
            });

            const data = await response.json();

            if (data.success) {
                setGeneratedPost(data.post);
            } else {
                alert("Erro ao gerar post");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão");
        } finally {
            setIsGenerating(false);
        }
    };

    const handlePublish = () => {
        alert("Post publicado com sucesso! (Simulação: Em um app real, isso salvaria no banco de dados)");
        setGeneratedPost(null);
        setContext("");
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-3xl font-bold mb-8 text-red-600">Painel Admin - Gerador de Conteúdo</h1>

                <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-8">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                        Contexto do Post (Ex: "Vitória contra o Vasco", "Reforço anunciado")
                    </label>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600"
                            placeholder="Digite o tema do post..."
                            value={context}
                            onChange={(e) => setContext(e.target.value)}
                        />
                        <button
                            onClick={handleGenerate}
                            disabled={isGenerating || !context}
                            className={`px-6 py-3 rounded-lg font-bold transition-all ${isGenerating || !context
                                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                                    : "bg-red-600 hover:bg-red-500 text-white shadow-lg"
                                }`}
                        >
                            {isGenerating ? "Gerando..." : "Gerar com IA ✨"}
                        </button>
                    </div>
                </div>

                {generatedPost && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-xl font-bold mb-4 text-gray-300">Preview do Post Gerado:</h2>

                        <div className="bg-black rounded-xl overflow-hidden border border-neutral-800 shadow-2xl mb-6">
                            <div className="relative h-64 w-full">
                                <Image
                                    src={generatedPost.coverImage}
                                    alt={generatedPost.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                                    {generatedPost.category}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="text-sm text-gray-400 mb-2">{generatedPost.date} • Por {generatedPost.author}</div>
                                <h1 className="text-3xl font-bold text-white mb-4">{generatedPost.title}</h1>
                                <div
                                    className="prose prose-invert prose-lg max-w-none text-gray-300"
                                    dangerouslySetInnerHTML={{ __html: generatedPost.content }}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setGeneratedPost(null)}
                                className="px-6 py-3 rounded-lg font-semibold text-gray-400 hover:text-white hover:bg-neutral-800 transition-colors"
                            >
                                Descartar
                            </button>
                            <button
                                onClick={handlePublish}
                                className="px-8 py-3 rounded-lg font-bold bg-green-600 hover:bg-green-500 text-white shadow-lg transition-all transform hover:-translate-y-1"
                            >
                                Publicar Post 🚀
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
