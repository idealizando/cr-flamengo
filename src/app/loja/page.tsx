"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeronSection";

// Definir o tipo de um produto
interface Produto {
  id: number;
  nome: string;
  preco: string;
  imagem: string;
  categoria: string;
}

// Mock de produtos
const produtosMock: Produto[] = [
  { id: 1, nome: "Camisa Oficial", preco: "R$ 199,90", imagem: "/images/camisa.jpg", categoria: "Camisas" },
  { id: 2, nome: "Caneca Personalizada", preco: "R$ 49,90", imagem: "/images/caneca.jpg", categoria: "Canecas" },
  { id: 3, nome: "Quadro Decorativo", preco: "R$ 89,90", imagem: "/images/quadro.jpg", categoria: "Acessórios" },
  { id: 4, nome: "Boné Oficial", preco: "R$ 79,90", imagem: "/images/bone.jpg", categoria: "Acessórios" },
  { id: 5, nome: "Boné Oficial", preco: "R$ 79,90", imagem: "/images/bone.jpg", categoria: "Acessórios" },
  { id: 6, nome: "Boné Oficial", preco: "R$ 79,90", imagem: "/images/bone.jpg", categoria: "Acessórios" },

];

const categorias = ["Todos", "Camisas", "Canecas", "Acessórios"];

export default function Loja() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("Todos");
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(null);

  const produtosFiltrados = categoriaSelecionada === "Todos"
    ? produtosMock
    : produtosMock.filter((p) => p.categoria === categoriaSelecionada);

  return (
    <>
      <HeroSection title="Loja Oficial" subtitle="Produtos exclusivos para a Nação Rubro-Negra!" />

      {/* Filtros */}
      <div className="container mx-auto px-4 py-6 flex justify-center gap-4 bg-opacity-50">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`px-4 py-2 rounded ${categoriaSelecionada === categoria ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setCategoriaSelecionada(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Lista de Produtos */}
      <section className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {produtosFiltrados.map((produto) => (
          <div key={produto.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4 bg-opacity-50">
            <img src={produto.imagem} alt={produto.nome} className="w-32 h-32 object-cover" />
            <h2 className="text-lg font-bold text-gray-800 mt-2">{produto.nome}</h2>
            <p className="text-red-600 text-lg font-semibold">{produto.preco}</p>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700"
              onClick={() => setProdutoSelecionado(produto)}
            >
              Comprar
            </button>
          </div>
        ))}
      </section>

      {/* Modal de Detalhes do Produto */}
      {produtoSelecionado && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-md">
            <img src={produtoSelecionado.imagem} alt={produtoSelecionado.nome} className="w-40 h-40 object-cover mx-auto" />
            <h2 className="text-xl font-bold text-gray-800 mt-2">{produtoSelecionado.nome}</h2>
            <p className="text-red-600 text-lg font-semibold">{produtoSelecionado.preco}</p>
            <button className="bg-gray-500 text-white px-4 py-2 rounded mt-4 mr-2" onClick={() => setProdutoSelecionado(null)}>Fechar</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded mt-4 hover:bg-red-700">Adicionar ao Carrinho</button>
          </div>
        </div>
      )}
    </>
  );
}
