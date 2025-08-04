export default function Historia() {
  return (
    <section className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">História</h1>
      <p className="mb-4">
        Relembre momentos marcantes, conquistas históricas e ídolos inesquecíveis do Flamengo.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a href="#" className="underline hover:text-red-300">
            [História] A mística do Maracanã nos títulos rubro-negros
          </a>
        </li>
        <li>
          <a href="#" className="underline hover:text-red-300">
            [História] Zico e os anos dourados: uma era inesquecível
          </a>
        </li>
      </ul>
    </section>
  );
}
