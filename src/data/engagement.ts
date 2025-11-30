export const quizQuestions = [
    {
        id: 1,
        question: "Em que ano o Flamengo conquistou seu primeiro título da Libertadores?",
        options: ["1980", "1981", "1982", "1983"],
        answer: "1981",
    },
    {
        id: 2,
        question: "Quem é o maior artilheiro da história do Flamengo?",
        options: ["Gabigol", "Romário", "Zico", "Bebeto"],
        answer: "Zico",
    },
    {
        id: 3,
        question: "Qual técnico comandou o time na conquista da Libertadores de 2019?",
        options: ["Jorge Jesus", "Renato Gaúcho", "Rogério Ceni", "Dorival Júnior"],
        answer: "Jorge Jesus",
    },
];

export const players = [
    { id: 1, name: "Rossi", position: "Goleiro" },
    { id: 2, name: "Varela", position: "Defensor" },
    { id: 3, name: "Fabrício Bruno", position: "Defensor" },
    { id: 4, name: "Léo Pereira", position: "Defensor" },
    { id: 5, name: "Ayrton Lucas", position: "Defensor" },
    { id: 6, name: "Erick Pulgar", position: "Meio-Campo" },
    { id: 7, name: "Gerson", position: "Meio-Campo" },
    { id: 8, name: "De la Cruz", position: "Meio-Campo" },
    { id: 9, name: "Arrascaeta", position: "Meio-Campo" },
    { id: 10, name: "Pedro", position: "Atacante" },
    { id: 11, name: "Everton Cebolinha", position: "Atacante" },
    { id: 12, name: "Luiz Araújo", position: "Atacante" },
    { id: 13, name: "Bruno Henrique", position: "Atacante" },
    { id: 14, name: "Gabigol", position: "Atacante" },
];

export const scenarios = [
    {
        id: 1,
        title: "Final da Libertadores",
        situation: "43 do 2º tempo. Jogo empatado 1x1. O time adversário está pressionando. Você tem uma substituição restante.",
        options: [
            { text: "Colocar um zagueiro e segurar o empate para os pênaltis", outcome: "Derrota! O time recuou demais e tomou gol no último minuto." },
            { text: "Colocar um atacante veloz para o contra-ataque", outcome: "Vitória! O atacante puxou um contra-ataque mortal e fez o gol do título!" },
        ],
    },
    {
        id: 2,
        title: "Clássico no Maracanã",
        situation: "Seu time está ganhando de 1x0, mas teve um jogador expulso aos 15 do 2º tempo.",
        options: [
            { text: "Tirar um atacante e recompor o meio-campo", outcome: "Empate. O time segurou bem, mas sofreu o gol de empate no fim." },
            { text: "Manter o time como está e apostar na raça", outcome: "Vitória! A torcida empurrou e o time segurou o resultado na base da superação." },
        ],
    },
];
