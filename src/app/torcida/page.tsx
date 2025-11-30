import Link from "next/link";

const features = [
    {
        title: "Bolão da Nação",
        description: "Dê seu palpite para o próximo jogo e mostre que você entende de futebol.",
        link: "/torcida/bolao",
        icon: "⚽",
        color: "bg-green-600",
    },
    {
        title: "Quiz Rubro-Negro",
        description: "Teste seus conhecimentos sobre a história do Mais Querido.",
        link: "/torcida/quiz",
        icon: "🧠",
        color: "bg-blue-600",
    },
    {
        title: "Escalação da Galera",
        description: "Monte seu 11 ideal e compartilhe com a Nação.",
        link: "/torcida/escalacao",
        icon: "📋",
        color: "bg-yellow-600",
    },
    {
        title: "Varal da Torcida",
        description: "Veja fotos da torcida espalhada pelo mundo.",
        link: "/torcida/mural",
        icon: "📸",
        color: "bg-purple-600",
    },
    {
        title: "Simulador de Técnico",
        description: "Tome as decisões difíceis e veja se você seria um bom treinador.",
        link: "/torcida/simulador",
        icon: "👔",
        color: "bg-red-600",
    },
];

export default function TorcidaHub() {
    return (
        <div className="min-h-screen text-white py-12 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                        Área da <span className="text-red-600">Torcida</span>
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                        Divirta-se, interaja e mostre sua paixão pelo Flamengo com nossos jogos e desafios exclusivos.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature) => (
                        <Link
                            key={feature.title}
                            href={feature.link}
                            className="group relative overflow-hidden rounded-xl bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 hover:border-red-600 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                        >
                            <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-6xl`}>
                                {feature.icon}
                            </div>
                            <div className="p-8">
                                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
