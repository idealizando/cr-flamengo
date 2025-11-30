import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

async function getPost(slug: string) {
    try {
        // Como não temos um endpoint de detalhe confirmado, vamos buscar todos e filtrar
        // Em produção, o ideal seria: fetch(`http://127.0.0.1:5000/posts/${slug}`)
        const response = await fetch("http://127.0.0.1:5000/", { cache: 'no-store' });
        const data = await response.json();

        const backendPost = data.posts.find((p: { slug: string; id: string; titulo: string; texto: string; imagem: string; data_criacao: string; categoria: string; autor: string; }) => p.slug === slug);

        if (!backendPost) return null;

        return {
            id: backendPost.id,
            title: backendPost.titulo,
            excerpt: backendPost.texto.substring(0, 150) + "...",
            content: backendPost.texto,
            coverImage: backendPost.imagem,
            date: new Date(backendPost.data_criacao).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
            }),
            category: backendPost.categoria,
            author: backendPost.autor,
            slug: backendPost.slug,
        };
    } catch (error) {
        console.error("Erro ao buscar post:", error);
        return null;
    }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        return {
            title: 'Post não encontrado | Flamengoverso',
        };
    }

    return {
        title: `${post.title} | Flamengoverso`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-black text-white pb-20">
            {/* Hero Image */}
            <div className="relative w-full h-[50vh] md:h-[60vh]">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-4 md:p-8">
                    <div className="container mx-auto max-w-4xl">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-sm text-gray-300 hover:text-red-500 mb-6 transition-colors"
                        >
                            &larr; Voltar para o Blog
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded uppercase">
                                {post.category}
                            </span>
                            <span className="text-gray-300 text-sm">
                                {post.date}
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
                            {post.excerpt}
                        </p>
                    </div>
                </div>
            </div>

            {/* Conteúdo do Post */}
            <div className="container mx-auto max-w-3xl px-4 py-12">
                <div
                    className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-red-500 hover:prose-a:text-red-400 prose-strong:text-white"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <hr className="my-12 border-neutral-800" />

                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500">Escrito por</p>
                        <p className="font-semibold text-white">{post.author}</p>
                    </div>
                    <Link
                        href="/blog"
                        className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg transition-colors font-semibold"
                    >
                        Ver mais posts
                    </Link>
                </div>
            </div>
        </article>
    );
}
