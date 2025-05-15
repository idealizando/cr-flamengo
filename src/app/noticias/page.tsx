"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeronSection";
import NewsModal from "@/components/NewsModal";
import { News } from "@/types/news";

const categorias = ["Todos", "Jogos", "Contratações", "Táticas", "História do Flamengo"];
//const NOTICIAS_POR_PAGINA = 5;

export default function Noticias() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [noticias, setNoticias] = useState<News[]>([]);
  const [totalPaginas, setTotalPaginas] = useState(1);

  const site =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "") // ex: flamengoverso.com.br
      : "";

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const categoriaParam = selectedCategory !== "Todos" ? `&category=${selectedCategory}` : "";
        const response = await fetch(
          `https://backend-news-api-138417386089.us-central1.run.app/api/news?site=${site}&page=${paginaAtual}${categoriaParam}`
        );
        const data = await response.json();
        setNoticias(data.news);
        setTotalPaginas(data.totalPages || 1);
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
      }
    };

    fetchNoticias();
  }, [selectedCategory, paginaAtual]);

  return (
    <>
      <HeroSection title="Últimas Notícias" subtitle="Fique por dentro de tudo sobre o seu time!" />

      {/* Menu de Categorias */}
      <div className="container mx-auto px-4 py-6 flex justify-center gap-4">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            className={`px-4 py-2 rounded ${
              selectedCategory === categoria
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => {
              setSelectedCategory(categoria);
              setPaginaAtual(1); // Resetar para primeira página ao mudar categoria
            }}
          >
            {categoria}
          </button>
        ))}
      </div>

      {/* Lista de Notícias em Cards */}
      <section className="container mx-auto px-4 py-6 flex flex-col gap-6">
        {noticias.length === 0 ? (
          <p className="text-center text-gray-500">Nenhuma notícia encontrada.</p>
        ) : (
          noticias.map((noticia) => (
            <div
              key={noticia.id}
              className="bg-white bg-black bg-opacity-50 shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row"
            >
              <img
                src={noticia.image || "/images/default.jpg"}
                alt={noticia.title}
                className="w-full sm:w-48 object-cover"
              />
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
          ))
        )}
      </section>

      {/* Controles de Paginação */}
      <div className="flex justify-between items-center mt-6 container mx-auto px-4">
        <button
          className={`px-4 py-2 rounded ${
            paginaAtual === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
          disabled={paginaAtual === 1}
          onClick={() => setPaginaAtual(paginaAtual - 1)}
        >
          Anterior
        </button>

        <span className="text-gray-800">
          Página {paginaAtual} de {totalPaginas}
        </span>

        <button
          className={`px-4 py-2 rounded ${
            paginaAtual === totalPaginas
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
          disabled={paginaAtual === totalPaginas}
          onClick={() => setPaginaAtual(paginaAtual + 1)}
        >
          Próximo
        </button>
      </div>

      {/* Modal de notícia */}
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
