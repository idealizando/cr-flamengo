"use client";

import React, { useState } from "react";
import Link from "next/link";
import { players } from "@/data/engagement";

export default function EscalacaoPage() {
    const [team, setTeam] = useState<Record<string, string>>({});
    const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

    const positions = [
        { id: "gol", label: "GOL", top: "85%", left: "50%" },
        { id: "le", label: "LE", top: "65%", left: "15%" },
        { id: "zag1", label: "ZAG", top: "70%", left: "35%" },
        { id: "zag2", label: "ZAG", top: "70%", left: "65%" },
        { id: "ld", label: "LD", top: "65%", left: "85%" },
        { id: "vol1", label: "VOL", top: "50%", left: "35%" },
        { id: "vol2", label: "VOL", top: "50%", left: "65%" },
        { id: "meia1", label: "MEI", top: "35%", left: "20%" },
        { id: "meia2", label: "MEI", top: "35%", left: "80%" },
        { id: "ata1", label: "ATA", top: "20%", left: "35%" },
        { id: "ata2", label: "ATA", top: "20%", left: "65%" },
    ];

    const handlePlayerSelect = (playerName: string) => {
        if (selectedPosition) {
            setTeam({ ...team, [selectedPosition]: playerName });
            setSelectedPosition(null);
        }
    };

    return (
        <div className="min-h-screen text-white py-12 px-4 flex flex-col items-center">
            <Link href="/torcida" className="mb-8 text-gray-400 hover:text-white transition-colors">
                &larr; Voltar para Área da Torcida
            </Link>

            <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Campo de Futebol */}
                <div className="md:col-span-2 bg-green-800 rounded-xl border-4 border-white relative aspect-[3/4] md:aspect-[4/3] shadow-2xl overflow-hidden">
                    {/* Linhas do Campo (Decorativo) */}
                    <div className="absolute inset-0 border-2 border-white/30 m-4 rounded-lg"></div>
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/30 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

                    {/* Posições */}
                    {positions.map((pos) => (
                        <button
                            key={pos.id}
                            onClick={() => setSelectedPosition(pos.id)}
                            className={`absolute transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex flex-col items-center justify-center text-xs font-bold shadow-lg transition-all hover:scale-110 ${team[pos.id]
                                    ? "bg-red-700 text-white border-2 border-black"
                                    : "bg-white/20 hover:bg-white/40 text-white border-2 border-dashed border-white"
                                }`}
                            style={{ top: pos.top, left: pos.left }}
                        >
                            {team[pos.id] ? (
                                <span className="text-[10px] text-center leading-tight px-1">{team[pos.id]}</span>
                            ) : (
                                pos.label
                            )}
                        </button>
                    ))}
                </div>

                {/* Lista de Jogadores */}
                <div className="bg-neutral-900/80 backdrop-blur-sm p-6 rounded-xl border border-neutral-800 h-fit">
                    <h2 className="text-xl font-bold mb-4 text-yellow-500">
                        {selectedPosition ? "Escolha o Jogador" : "Selecione uma posição"}
                    </h2>

                    {selectedPosition ? (
                        <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {players.map((player) => (
                                <button
                                    key={player.id}
                                    onClick={() => handlePlayerSelect(player.name)}
                                    className="w-full text-left p-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors flex justify-between items-center"
                                >
                                    <span>{player.name}</span>
                                    <span className="text-xs text-gray-400">{player.position}</span>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-400 text-sm">
                            Clique nas bolinhas no campo para escalar seu time titular.
                        </p>
                    )}

                    <div className="mt-8 pt-4 border-t border-neutral-700">
                        <button
                            className="w-full bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-3 rounded-lg shadow-lg transition-all"
                            onClick={() => alert("Funcionalidade de compartilhamento em breve!")}
                        >
                            COMPARTILHAR ESCALAÇÃO
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
