"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BolaoPage() {
    const [score, setScore] = useState({ home: "", away: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen text-white py-12 px-4 flex flex-col items-center">
            <Link href="/torcida" className="mb-8 text-gray-400 hover:text-white transition-colors">
                &larr; Voltar para Área da Torcida
            </Link>

            <div className="max-w-2xl w-full bg-neutral-900/80 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 shadow-2xl">
                <h1 className="text-3xl font-bold text-center mb-2 text-green-500">Bolão da Nação ⚽</h1>
                <p className="text-center text-gray-400 mb-8">
                    Qual será o placar do próximo jogo?
                </p>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex items-center justify-center gap-8">
                            {/* Mandante */}
                            <div className="text-center">
                                <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center text-2xl font-bold mb-2 mx-auto border-4 border-black shadow-lg">
                                    FLA
                                </div>
                                <h2 className="font-bold text-xl">Flamengo</h2>
                                <input
                                    type="number"
                                    min="0"
                                    required
                                    className="w-16 h-16 text-center text-3xl bg-neutral-800 border border-neutral-700 rounded-lg mt-4 focus:outline-none focus:border-green-500 transition-colors"
                                    value={score.home}
                                    onChange={(e) => setScore({ ...score, home: e.target.value })}
                                />
                            </div>

                            <div className="text-4xl font-bold text-gray-600">X</div>

                            {/* Visitante */}
                            <div className="text-center">
                                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center text-2xl font-bold mb-2 mx-auto border-4 border-black shadow-lg">
                                    ADV
                                </div>
                                <h2 className="font-bold text-xl">Adversário</h2>
                                <input
                                    type="number"
                                    min="0"
                                    required
                                    className="w-16 h-16 text-center text-3xl bg-neutral-800 border border-neutral-700 rounded-lg mt-4 focus:outline-none focus:border-green-500 transition-colors"
                                    value={score.away}
                                    onChange={(e) => setScore({ ...score, away: e.target.value })}
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-green-900/30 transition-all transform hover:-translate-y-1"
                        >
                            ENVIAR PALPITE
                        </button>
                    </form>
                ) : (
                    <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
                        <div className="text-6xl mb-4">🎉</div>
                        <h2 className="text-2xl font-bold mb-2">Palpite Registrado!</h2>
                        <p className="text-gray-300 mb-6">
                            Você apostou em <strong>Flamengo {score.home} x {score.away} Adversário</strong>.
                        </p>
                        <p className="text-sm text-gray-500">
                            Boa sorte! Se acertar, você sobe no ranking mensal.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="mt-8 text-green-500 hover:underline"
                        >
                            Fazer outro palpite
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
