export default function Torcida() {
  return (
    <section className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Torcida</h1>
      <p className="mb-4">
        Espaço dedicado às histórias dos torcedores, experiências nos estádios, encontros de torcida e paixão rubro-negra.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          <a href="#" className="underline hover:text-red-300">
            [Torcida] Minha primeira vez no Maraca: relato de um torcedor de 8 anos
          </a>
        </li>
        <li>
          <a href="#" className="underline hover:text-red-300">
            [Torcida] Nação em todo o Brasil: a festa rubro-negra no Nordeste
          </a>
        </li>
      </ul>
    </section>
  );
}
