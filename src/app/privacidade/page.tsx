import React from "react";

export const metadata = {
    title: "Política de Privacidade | Flamengo Verso",
    description: "Política de Privacidade do Flamengo Verso.",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-black text-white py-12 px-4 md:px-8">
            <div className="max-w-3xl mx-auto bg-neutral-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-neutral-800 shadow-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-red-600 border-b border-neutral-800 pb-4">
                    Política de Privacidade
                </h1>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                        A sua privacidade é importante para nós. É política do <strong>Flamengo Verso</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <a href="https://flamengoverso.com" className="text-red-500 hover:underline">Flamengo Verso</a>, e outros sites que possuímos e operamos.
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Informações que coletamos</h2>
                        <p>
                            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">2. Uso de Dados</h2>
                        <p>
                            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">3. Compartilhamento de Informações</h2>
                        <p>
                            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Cookies</h2>
                        <p>
                            O nosso site pode usar &quot;cookies&quot; para melhorar a experiência do usuário. Você tem a liberdade de recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Compromisso do Usuário</h2>
                        <p>
                            O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Flamengo Verso oferece no site e com caráter enunciativo, mas não limitativo:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                            <li>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                            <li>Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Flamengo Verso, de seus fornecedores ou terceiros.</li>
                        </ul>
                    </section>

                    <p className="text-sm text-gray-500 mt-8 pt-4 border-t border-neutral-800">
                        Esta política é efetiva a partir de <strong>Novembro de 2024</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
}
