import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/posts';

interface PostCardProps {
    post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className="group block bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-red-900/20 transition-all duration-300 border border-neutral-800 hover:border-red-800">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-red-700 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                    {post.category}
                </div>
            </div>
            <div className="p-5">
                <div className="text-xs text-gray-400 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {post.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-3">
                    {post.excerpt}
                </p>
                <div className="mt-4 text-red-500 text-sm font-semibold group-hover:underline">
                    Ler mais &rarr;
                </div>
            </div>
        </Link>
    );
}
