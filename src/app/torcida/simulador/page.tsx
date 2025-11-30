"use client";

import React, { useState } from "react";
import Link from "next/link";
import { scenarios } from "@/data/engagement";

export default function SimuladorPage() {
    const [currentScenario, setCurrentScenario] = useState(0);
    const [result, setResult] = useState<{ text: string; outcome: string } | null>(null);

    const handleChoice = (option: { text: string; outcome: string }) => {
        setResult(option);
    };

    const nextScenario = () => {
        setResult(null);
        if (currentScenario < scenarios.length - 1) {
            setCurrentScenario(currentScenario + 1);
        } else {
            alert("Você completou todos os cenários disponíveis!");
            setCurrentScenario(0);
        }
    };

    const scenario = scenarios[currentScenario];

    return (
        <div className="min-h-screen text-white py-12 px-4 flex flex-col items-center">
            <Link href="/torcida" className="mb-8 text-gray-400 hover:text-white transition-colors">
                &larr; Voltar para Área da Torcida
            </Link>

            <div className="max-w-2xl w-full bg-neutral-900/80 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 shadow-2xl">
                <h1 className="text-3xl font-bold text-center mb-2 text-red-500">Simulador de Técnico 👔</h1>
                <p className="text-center text-gray-400 mb-8">
                    O que você faria nessa situação?
                </p>

                <div className="mb-8">
                    <div className="bg-black/50 p-6 rounded-xl border border-neutral-700 mb-6">
                        <h2 className="text-xl font-bold text-white mb-2">{scenario.title}</h2>
                        <p className="text-gray-300 italic">&quot;{scenario.situation}&quot;</p>
                    </div>

                    {!result ? (
                        <div className="space-y-4">
                            {scenario.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleChoice(option)}
                                    className="w-full text-left p-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 hover:border-red-500 transition-all duration-200 group"
                                >
                                    <span className="font-bold text-red-500 mr-2 group-hover:text-white transition-colors">Opção {index + 1}:</span>
                                    {option.text}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className={`p-6 rounded-xl border mb-6 ${result.outcome.includes("Vitória")
                                ? "bg-green-900/30 border-green-600 text-green-100"
                                : "bg-red-900/30 border-red-600 text-red-100"
                                }`}>
                                <h3 className="font-bold text-lg mb-2">Resultado:</h3>
                                <p>{result.outcome}</p>
                            </div>

                            <button
                                onClick={nextScenario}
                                className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Próximo Cenário &rarr;
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
