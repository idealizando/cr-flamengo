export default function Curiosidades() {
  return (
    <section className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Curiosidades</h1>
      <p className="mb-4">
        Fatos inusitados, estatísticas surpreendentes e detalhes que todo flamenguista adora saber.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a href="#" className="underline hover:text-red-300">
            [Curiosidade] Por que o número 10 é tão importante no Flamengo?
          </a>
        </li>
        <li>
          <a href="#" className="underline hover:text-red-300">
            [Curiosidade] Flamengo já teve um mascote diferente do Urubu?
          </a>
        </li>
      </ul>
    </section>
  );
}
