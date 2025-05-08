"use client";

import React, { useState } from "react";
import HeroSection from "@/components/HeronSection";
import NewsModal from "@/components/NewsModal";
import { News } from "@/types/news";


const noticiasMock: News[] = [
  {
    id: 1,
    title: "Flamengo vence clássico e assume a liderança!",
    date: "12 de Fevereiro de 2025",
    summary: "Em uma partida emocionante, o Flamengo venceu seu rival por 3 a 1 e agora lidera o campeonato.",
    content: "No Maracanã lotado, o Flamengo enfrentou um jogo difícil, mas conseguiu impor seu ritmo...",
    category: "Jogos",
    image: "/images/flamengo-vitoria.jpg",
  },
  {
    id: 2,
    title: "Novo reforço do Flamengo é anunciado!",
    date: "10 de Fevereiro de 2025",
    summary: "O Mengão fechou contrato com um craque internacional para reforçar o elenco na temporada 2025.",
    content: "O clube anunciou a contratação do atacante estrela que vinha se destacando na Europa...",
    category: "Contratações",
    image: "/images/flamengo-reforco.jpg",
  },
  {
    id: 3,
    title: "Ingressos esgotados para a final da Libertadores!",
    date: "08 de Fevereiro de 2025",
    summary: "A Nação Rubro-Negra lotará o estádio na grande final contra o River Plate.",
    content: "Os ingressos foram vendidos em tempo recorde, e a torcida promete uma grande festa...",
    category: "Jogos",
    image: "/images/flamengo-libertadores.jpg",
  },
  {
    id: 4,
    title: "Flamengo terá voltas de Arrascaeta e De La Cruz",
    date: "06 de Fevereiro de 2025",
    summary: "Os jogadores retornam aos treinos e podem reforçar o time nas próximas rodadas do campeonato.",
    content: "Após semanas fora, os meias uruguaio estão de volta...",
    category: "Jogos",
    image: "/images/flamengo-arrascaeta.jpg",
  },
  {
    id: 5,
    title: "Torcida do Flamengo bate recorde de público!",
    date: "04 de Fevereiro de 2025",
    summary: "Mais de 70 mil torcedores lotaram o Maracanã em apoio ao time rubro-negro.",
    content: "O Flamengo continua mostrando sua força dentro e fora de campo...",
    category: "Torcida",
    image: "/images/flamengo-torcida.jpg",
  },
];

const categorias = ["Todos", "Jogos", "Contratações", "Táticas", "História do Flamengo"];
const NOTICIAS_POR_PAGINA = 5;

export default function Noticias() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const [paginaAtual, setPaginaAtual] = useState(1);

  // Filtra as notícias pela categoria
  const filteredNews =
    selectedCategory === "Todos"
      ? noticiasMock
      : noticiasMock.filter((noticia) => noticia.category === selectedCategory);

  // Paginação
  const totalPaginas = Math.ceil(filteredNews.length / NOTICIAS_POR_PAGINA);
  const inicioIndex = (paginaAtual - 1) * NOTICIAS_POR_PAGINA;
  const noticiasPaginadas = filteredNews.slice(inicioIndex, inicioIndex + NOTICIAS_POR_PAGINA);

  return (
    <>
      <HeroSection title="Últimas Notícias" subtitle="Fique por dentro de tudo sobre o Flamengo!" />

      {/* Menu de Categorias */}
      <div className="container mx-auto px-4 py-6 flex justify-center gap-4">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`px-4 py-2 rounded ${selectedCategory === categoria ? "bg-red-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => {
              setSelectedCategory(categoria);
              setPaginaAtual(1); // Resetar para primeira página ao mudar categoria
            }}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Lista de Notícias em Cards (1 abaixo do outro) */}
      <section className="container mx-auto px-4 py-6 flex flex-col gap-6 ">
        {noticiasPaginadas.map((noticia) => (
          <div key={noticia.id} className="bg-white  bg-black bg-opacity-50 shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row">
            <img src={noticia.image} alt={noticia.title} className="w-full sm:w-48 object-cover" />
            <div className="p-6 flex flex-col justify-between">
              <h2 className="text-lg font-bold text-gray-800">{noticia.title}</h2>
              <p className="text-gray-500 text-sm">{noticia.date}</p>
              <p className="text-gray-700 mt-2">{noticia.summary}</p>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mt-4 self-start"
                onClick={() => setSelectedNews(noticia)}
              >
                Leia mais
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Controles de Paginação */}
      <div className="flex justify-between items-center mt-6 container mx-auto px-4">
        <button
          className={`px-4 py-2 rounded ${paginaAtual === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"}`}
          disabled={paginaAtual === 1}
          onClick={() => setPaginaAtual(paginaAtual - 1)}
        >
          Anterior
        </button>

        <span className="text-gray-800">Página {paginaAtual} de {totalPaginas}</span>

        <button
          className={`px-4 py-2 rounded ${paginaAtual === totalPaginas ? "bg-gray-300 cursor-not-allowed" : "bg-red-600 text-white hover:bg-red-700"}`}
          disabled={paginaAtual === totalPaginas}
          onClick={() => setPaginaAtual(paginaAtual + 1)}
        >
          Próximo
        </button>
      </div>

      {/* Exibir o Modal se houver uma notícia selecionada */}
      {selectedNews && (
        <NewsModal
          title={selectedNews.title}
          date={selectedNews.date}
          content={selectedNews.content}
          image={selectedNews.image}
          onClose={() => setSelectedNews(null)}
        />
      )}
    </>
  );
}
