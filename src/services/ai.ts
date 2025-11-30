import { BlogPost } from "@/data/posts";

// Simulação de resposta do Gemini
const MOCK_TITLES = [
    "Flamengo domina o jogo e vence com autoridade no Maracanã",
    "Com gol no fim, Mengão arranca vitória heroica",
    "Gabigol brilha e Flamengo goleia em noite mágica",
    "Defesa sólida garante mais três pontos para o Rubro-Negro",
];

const MOCK_IMAGES = [
    "https://images.unsplash.com/photo-1522778119026-d647f0565c6a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504159506876-f8338247a14a?q=80&w=2070&auto=format&fit=crop",
];

export async function generatePostContent(context: string): Promise<Partial<BlogPost>> {
    // Aqui entraria a chamada real para o Gemini API
    // const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    // const result = await model.generateContent(prompt);

    // Simulando delay de processamento da IA
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const randomTitle = MOCK_TITLES[Math.floor(Math.random() * MOCK_TITLES.length)];
    const randomImage = MOCK_IMAGES[Math.floor(Math.random() * MOCK_IMAGES.length)];
    const date = new Date().toLocaleDateString("pt-BR", { day: 'numeric', month: 'long', year: 'numeric' });

    return {
        title: `${randomTitle} (${context})`,
        excerpt: "O Flamengo mostrou mais uma vez sua força em campo. Confira a análise completa da partida e os destaques individuais.",
        content: `
      <p>Em uma partida eletrizante, o Flamengo mostrou porque é o time a ser batido. Desde o apito inicial, a equipe impôs seu ritmo e pressionou o adversário.</p>
      <h2>Destaques do Jogo</h2>
      <p>O meio-campo funcionou como um relógio, distribuindo jogadas e controlando a posse de bola. O ataque foi letal nas oportunidades que teve.</p>
      <h2>O que vem por aí</h2>
      <p>Com esse resultado, o Mengão segue firme na busca por mais títulos. A torcida, como sempre, deu um show à parte nas arquibancadas.</p>
    `,
        coverImage: randomImage,
        date: date,
        category: "Analises",
        author: "IA Rubro-Negra",
        slug: `post-gerado-${Date.now()}`,
        id: `generated-${Date.now()}`,
    };
}
