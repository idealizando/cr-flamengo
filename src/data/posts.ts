export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    coverImage: string;
    date: string;
    category: 'Analises' | 'Historia' | 'Curiosidades' | 'Torcida';
    author: string;
}

export const posts: BlogPost[] = [
    {
        id: '1',
        slug: 'analise-tatica-flamengo-2024',
        title: 'A Evolução Tática do Flamengo em 2024',
        excerpt: 'Como o time se adaptou às novas formações e o impacto dos reforços no esquema tático.',
        content: `
      <p>O Flamengo de 2024 tem mostrado uma versatilidade impressionante. Com a chegada de novos reforços, o técnico conseguiu implementar variações táticas que antes pareciam impossíveis.</p>
      <h2>O Novo Meio-Campo</h2>
      <p>A dinâmica do meio-campo mudou drasticamente. A transição defesa-ataque está mais rápida, e a posse de bola, mais objetiva.</p>
      <h2>Defesa Sólida</h2>
      <p>A consistência defensiva tem sido o ponto alto. Menos gols sofridos e uma organização que protege melhor o goleiro.</p>
    `,
        coverImage: 'https://images.unsplash.com/photo-1522778119026-d647f0565c6a?q=80&w=2070&auto=format&fit=crop', // Exemplo genérico de estádio/futebol
        date: '28 de Novembro, 2024',
        category: 'Analises',
        author: 'Equipe Tática'
    },
    {
        id: '2',
        slug: 'zico-o-eterno-camisa-10',
        title: 'Zico: O Eterno Camisa 10 da Gávea',
        excerpt: 'Relembre os momentos mais marcantes da carreira do maior ídolo da história do Flamengo.',
        content: `
      <p>Arthur Antunes Coimbra, o Zico, não é apenas um jogador; é uma religião para a torcida rubro-negra.</p>
      <h2>O Mundial de 81</h2>
      <p>Aquele dia em Tóquio ficará para sempre na memória. O Liverpool não viu a cor da bola.</p>
      <h2>O Legado</h2>
      <p>Zico ensinou o que é amar o Flamengo. Sua dedicação e talento moldaram gerações de torcedores.</p>
    `,
        coverImage: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=2831&auto=format&fit=crop', // Exemplo genérico
        date: '15 de Novembro, 2024',
        category: 'Historia',
        author: 'Historiador CR'
    },
    {
        id: '3',
        slug: 'curiosidades-urubu',
        title: 'Por que o Urubu virou mascote?',
        excerpt: 'A história de como uma provocação se tornou um dos maiores símbolos de orgulho do clube.',
        content: `
      <p>Tudo começou em um clássico contra o Botafogo. A torcida rival tentou ofender, mas a Nação abraçou o Urubu.</p>
      <h2>O Voo da Vitória</h2>
      <p>Soltaram um urubu no Maracanã, e o Flamengo venceu. O resto é história.</p>
    `,
        coverImage: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2070&auto=format&fit=crop', // Exemplo genérico
        date: '10 de Novembro, 2024',
        category: 'Curiosidades',
        author: 'Curioso Rubro-Negro'
    },
    {
        id: '4',
        slug: 'a-festa-da-nacao',
        title: 'A Maior Torcida do Mundo em Festa',
        excerpt: 'Relatos emocionantes de torcedores que viajaram quilômetros para ver o Mengão.',
        content: `
      <p>Não importa onde o Flamengo jogue, a Nação estará lá. É um amor que não se mede.</p>
      <h2>Caravanas pelo Brasil</h2>
      <p>De norte a sul, o vermelho e preto domina as arquibancadas.</p>
    `,
        coverImage: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2070&auto=format&fit=crop', // Exemplo genérico
        date: '05 de Novembro, 2024',
        category: 'Torcida',
        author: 'Voz da Arquibancada'
    }
];
