"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeronSection";

// Definir o tipo de um plano VIP
interface PlanoVIP {
  id: number;
  nome: string;
  preco: string;
  beneficios: string[];
}

// Mock de planos VIP
const planosVIP: PlanoVIP[] = [
  {
    id: 1,
    nome: "Plano Mensal",
    preco: "R$ 29,90",
    beneficios: ["Acesso exclusivo a conteúdos premium", "Sorteios de brindes oficiais"],
  },
  {
    id: 2,
    nome: "Plano Trimestral",
    preco: "R$ 79,90",
    beneficios: ["Tudo do plano mensal", "Descontos exclusivos na loja"],
  },
  {
    id: 3,
    nome: "Plano Anual",
    preco: "R$ 299,90",
    beneficios: ["Tudo do plano trimestral", "Experiências VIP em jogos"],
  },
];

export default function ClubeVIP() {
  const [planoSelecionado, setPlanoSelecionado] = useState<PlanoVIP | null>(null);

  return (
    <>
      <HeroSection title="Clube VIP" subtitle="Seja um membro premium e aproveite benefícios exclusivos!" />

      <section className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {planosVIP.map((plano) => (
          <div
            key={plano.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center bg-opacity-50"
          >
            <h2 className="text-lg font-bold text-gray-800">{plano.nome}</h2>
            <p className="text-red-600 text-lg font-semibold my-2">{plano.preco}</p>
            <ul className="text-gray-700 text-sm mb-4">
              {plano.beneficios.map((beneficio, index) => (
                <li key={index}>• {beneficio}</li>
              ))}
            </ul>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => setPlanoSelecionado(plano)}
            >
              Assinar
            </button>
          </div>
        ))}
      </section>

      {/* Exibir plano selecionado */}
      {planoSelecionado && (
        <section className="container mx-auto px-4 py-6 bg-gray-100 rounded-lg text-center mt-6 p-4">
          <h2 className="text-lg font-bold text-gray-800">
            Você selecionou: {planoSelecionado.nome}
          </h2>
          <p className="text-red-600 text-lg font-semibold my-2">
            {planoSelecionado.preco}
          </p>
          <ul className="text-gray-700 text-sm mb-4">
            {planoSelecionado.beneficios.map((beneficio, index) => (
              <li key={index}>• {beneficio}</li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
