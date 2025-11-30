"use client";

import React, { useState } from "react";

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você implementaria a lógica de envio (API, Firebase, etc)
        console.log("Lead capturado:", formData);
        alert("Obrigado! Em breve você receberá novidades do Mengão.");
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-md bg-neutral-900 border border-red-800 rounded-xl shadow-2xl overflow-hidden">
                {/* Botão Fechar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    ✕
                </button>

                {/* Cabeçalho com Imagem/Gradiente */}
                <div className="h-32 bg-gradient-to-br from-red-900 to-black flex items-center justify-center">
                    <h2 className="text-2xl font-bold text-white text-center px-4">
                        Entre para o <span className="text-red-500">Clube VIP</span>
                    </h2>
                </div>

                {/* Formulário */}
                <div className="p-6">
                    <p className="text-gray-300 text-center mb-6 text-sm">
                        Cadastre-se para receber notícias exclusivas, promoções e conteúdos especiais do Flamengo em primeira mão!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1">
                                Nome Completo
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                placeholder="Seu nome"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1">
                                E-mail
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                placeholder="seu@email.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-xs font-medium text-gray-400 mb-1">
                                Telefone (Opcional)
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                placeholder="(11) 99999-9999"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-700 hover:bg-red-600 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-red-900/30 transition-all transform hover:-translate-y-0.5 mt-2"
                        >
                            QUERO RECEBER NOVIDADES
                        </button>
                    </form>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        Seus dados estão seguros. Não enviamos spam.
                    </p>
                </div>
            </div>
        </div>
    );
}
