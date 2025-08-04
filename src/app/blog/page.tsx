import Link from "next/link";

export default function Blog() {
  return (
    <section className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-4xl font-bold mb-6">Blog Rubro-Negro</h1>
      <p className="mb-6">
        Explore análises táticas, momentos históricos, curiosidades e histórias incríveis da torcida do Flamengo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/blog/analises" className="block bg-red-700/80 hover:bg-red-600 rounded p-6 shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Análises</h2>
          <p className="text-sm text-gray-200">Estudos táticos e avaliações de desempenho em campo.</p>
        </Link>

        <Link href="/blog/historia" className="block bg-red-700/80 hover:bg-red-600 rounded p-6 shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">História</h2>
          <p className="text-sm text-gray-200">Conquistas, ídolos e momentos inesquecíveis do clube.</p>
        </Link>

        <Link href="/blog/curiosidades" className="block bg-red-700/80 hover:bg-red-600 rounded p-6 shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Curiosidades</h2>
          <p className="text-sm text-gray-200">Fatos interessantes e estatísticas pouco conhecidas.</p>
        </Link>

        <Link href="/blog/torcida" className="block bg-red-700/80 hover:bg-red-600 rounded p-6 shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Torcida</h2>
          <p className="text-sm text-gray-200">Histórias da Nação Rubro-Negra pelos estádios e pelo mundo.</p>
        </Link>
      </div>
    </section>
  );
}
