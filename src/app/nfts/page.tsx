"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeronSection";

interface NFT {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
  descricao: string;
}

// Mock de NFTs disponíveis
const nftsMock: NFT[] = [
  { id: 1, nome: "NFT Gol Histórico", preco: "0.5 ETH", imagem: "/images/nft-gol.jpg", descricao: "Arte exclusiva do gol icônico do Flamengo na Libertadores!" },
  { id: 2, nome: "NFT Camisa Retrô", preco: "0.3 ETH", imagem: "/images/nft-camisa.jpg", descricao: "Uma arte digital da lendária camisa do Flamengo!" },
  { id: 3, nome: "NFT Estádio Lotado", preco: "0.8 ETH", imagem: "/images/nft-estadio.jpg", descricao: "O Maracanã tomado pela Nação Rubro-Negra em NFT exclusivo!" },
];

export default function NFTs() {
  const [nftSelecionado, setNftSelecionado] = useState<NFT | null>(null);

  return (
    <>
      <HeroSection title="NFTs Exclusivos" subtitle="Adquira artes digitais raras do Flamengo!" />

      {/* Lista de NFTs Disponíveis */}
      <section className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Marketplace de NFTs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nftsMock.map((nft) => (
            <div
              key={nft.id}
              className="bg-white bg-opacity-50 shadow-lg rounded-lg overflow-hidden p-4 text-center cursor-pointer hover:shadow-xl"
              onClick={() => setNftSelecionado(nft)}
            >
              <img src={nft.imagem} alt={nft.nome} className="w-full h-40 object-cover mb-2 rounded-md" />
              <h3 className="text-lg font-semibold text-gray-800">{nft.nome}</h3>
              <p className="text-red-600 font-bold">{nft.preco}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal de Detalhes do NFT */}
      {nftSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <img src={nftSelecionado.imagem} alt={nftSelecionado.nome} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold text-gray-800">{nftSelecionado.nome}</h3>
            <p className="text-gray-700">{nftSelecionado.descricao}</p>
            <p className="text-red-600 font-bold mt-2">{nftSelecionado.preco}</p>
            <div className="mt-4 flex justify-between">
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => setNftSelecionado(null)}
              >
                Fechar
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Comprar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
