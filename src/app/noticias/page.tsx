"use client";

import React, { useEffect, useState } from "react";
import NewsModal from "@/components/NewsModal";
import { News } from "@/types/news";

export default function Noticias() {
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [noticias, setNoticias] = useState<News[]>([]);
  const [totalPaginas, setTotalPaginas] = useState(1);

  const site =
    typeof window !== "undefined"
      ? window.location.hostname.replace("www.", "")
      : "";

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch(
          `https://backend-news-api-138417386089.us-central1.run.app/api/news?site=${site}&page=${paginaAtual}`
        );
        const data = await response.json();
        setNoticias(data.news);
        setTotalPaginas(data.totalPages || 1);
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
      }
    };

    fetchNoticias();
  }, [site, paginaAtual]);

  return (
    <>
      {/* Lista de Notícias em Cards */}
      <section className="container mx-auto px-4 py-6 flex flex-col gap-6">
        {noticias.length === 0 ? (
          <p className="text-center text-gray-500">Nenhuma notícia encontrada.</p>
        ) : (
          noticias.map((noticia) => (
            <div
              key={noticia.id}
              className="bg-black bg-opacity-50 shadow-lg rounded-lg overflow-hidden flex flex-col sm:flex-row cursor-pointer"
              onClick={() => setSelectedNews(noticia)}
            >
              <img
                src={noticia.image || "/images/default.jpg"}
                alt={noticia.title}
                className="w-full sm:w-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <h2 className="text-lg font-bold text-white">{noticia.title}</h2>
                <p className="text-gray-300 text-sm">{noticia.date}</p>
                <p className="text-gray-200 mt-2 line-clamp-3">{noticia.summary}</p>
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

        <span className="text-gray-100">
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
