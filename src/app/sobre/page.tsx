// src/app/sobre/page.tsx

export default function Sobre() {
  return (
    <main className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Sobre o Flamengo Verso</h1>

      <p className="mb-4">
        O <strong>Flamengo Verso</strong> é um portal digital criado por torcedores, para torcedores. Nosso objetivo é trazer informações, notícias e conteúdos interativos que celebram a paixão pelo Clube de Regatas do Flamengo.
      </p>

      <p className="mb-4">
        Aqui, você encontrará notícias atualizadas, análises, agenda de jogos, e muito mais. Nosso compromisso é oferecer uma experiência envolvente, com conteúdo de qualidade e sempre em sintonia com a Nação Rubro-Negra.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Transparência e Privacidade</h2>
      <p className="mb-4">
        Respeitamos a privacidade dos nossos visitantes. As informações exibidas no site são públicas e utilizadas de forma transparente.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Contato</h2>
      <p className="mb-4">
        Em caso de dúvidas, sugestões ou parcerias, entre em contato conosco:
        <br />
        <strong>Email:</strong> contato@flamengoverso.com.br
      </p>

      <p className="text-sm text-gray-400 mt-8 italic">
        Nota: Algumas informações podem ser armazenadas em cache para melhorar a performance. Mudanças recentes podem levar alguns minutos para aparecer.
      </p>
    </main>
  );
}
