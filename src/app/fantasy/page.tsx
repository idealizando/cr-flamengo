"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeronSection";

interface Jogador {
  id: number;
  nome: string;
  posicao: string;
  preco: string;
  imagem: string;
}

// Mock de jogadores disponíveis
const jogadoresMock: Jogador[] = [
  { id: 1, nome: "Pedro", posicao: "Atacante", preco: "R$ 10M", imagem: "/images/pedro.jpg" },
  { id: 2, nome: "Arrascaeta", posicao: "Meia", preco: "R$ 12M", imagem: "/images/arrascaeta.jpg" },
  { id: 3, nome: "Everton Ribeiro", posicao: "Meia", preco: "R$ 9M", imagem: "/images/everton.jpg" },
  { id: 4, nome: "Filipe Luís", posicao: "Lateral", preco: "R$ 8M", imagem: "/images/filipe.jpg" },
];

export default function FantasyGame() {
  const [time, setTime] = useState<Jogador[]>([]);

  // Adiciona jogador ao time
  const adicionarJogador = (jogador: Jogador) => {
    if (time.length < 5) {
      setTime([...time, jogador]);
    } else {
      alert("O time já está completo!");
    }
  };

  // Remove jogador do time
  const removerJogador = (id: number) => {
    setTime(time.filter(jogador => jogador.id !== id));
  };

  return (
    <>
      <HeroSection title="Fantasy Game" subtitle="Monte seu time com os craques do Flamengo!" />

      {/* Lista de Jogadores Disponíveis */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Escolha seus jogadores</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {jogadoresMock.map((jogador) => (
            <div key={jogador.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center bg-opacity-50">
              <img src={jogador.imagem} alt={jogador.nome} className="w-full h-32 object-cover mb-2" />
              <h3 className="text-lg font-semibold text-gray-800">{jogador.nome}</h3>
              <p className="text-gray-600">{jogador.posicao}</p>
              <p className="text-red-600 font-bold">{jogador.preco}</p>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-2"
                onClick={() => adicionarJogador(jogador)}
              >
                Selecionar
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Time do Usuário */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Seu Time</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {time.map((jogador) => (
            <div key={jogador.id} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{jogador.nome}</h3>
              <p className="text-gray-600">{jogador.posicao}</p>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mt-2"
                onClick={() => removerJogador(jogador.id)}
              >
                Remover
              </button>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 w-full">
          Confirmar Time
        </button>
      </section>
    </>
  );
}
