"use client";

import React, { useEffect, useState } from "react";

import PostCard from "@/components/PostCard";
import { BlogPost } from "@/data/posts";

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/");
        const data = await response.json();

        // Mapear os dados do backend para o formato esperado pelo frontend
        const mappedPosts: BlogPost[] = data.posts.map((post: {
          id: string;
          titulo: string;
          texto: string;
          imagem: string;
          data_criacao: string;
          categoria: string;
          autor: string;
          slug: string;
        }) => ({
          id: post.id,
          title: post.titulo,
          excerpt: post.texto.substring(0, 150) + "...", // Resumo simples
          content: post.texto,
          coverImage: post.imagem,
          date: new Date(post.data_criacao).toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          category: post.categoria,
          author: post.autor,
          slug: post.slug,
        }));

        setPosts(mappedPosts);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen text-white pt-4">
      <div className="container mx-auto px-4">
        {/* Lista de Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
          {loading ? (
            // Skeleton Loading simples
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-neutral-900/50 h-96 rounded-xl animate-pulse" />
            ))
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-gray-400 text-xl">Nenhum post encontrado.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
