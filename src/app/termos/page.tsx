import React from "react";

export const metadata = {
    title: "Termos de Uso | Flamengo Verso",
    description: "Termos de Uso do Flamengo Verso.",
};

export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-black text-white py-12 px-4 md:px-8">
            <div className="max-w-3xl mx-auto bg-neutral-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-neutral-800 shadow-2xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8 text-red-600 border-b border-neutral-800 pb-4">
                    Termos de Uso
                </h1>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">1. Termos</h2>
                        <p>
                            Ao acessar ao site <a href="https://flamengoverso.com" className="text-red-500 hover:underline">Flamengo Verso</a>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">2. Uso de Licença</h2>
                        <p>
                            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Flamengo Verso , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>Modificar ou copiar os materiais;</li>
                            <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Flamengo Verso;</li>
                            <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                            <li>Transferir os materiais para outra pessoa ou &apos;espelhe&apos; os materiais em qualquer outro servidor.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">3. Isenção de responsabilidade</h2>
                        <p>
                            Os materiais no site da Flamengo Verso são fornecidos &apos;como estão&apos;. Flamengo Verso não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">4. Limitações</h2>
                        <p>
                            Em nenhum caso o Flamengo Verso ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Flamengo Verso, mesmo que Flamengo Verso ou um representante autorizado da Flamengo Verso tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">5. Precisão dos materiais</h2>
                        <p>
                            Os materiais exibidos no site da Flamengo Verso podem incluir erros técnicos, tipográficos ou fotográficos. Flamengo Verso não garante que qualquer material em seu site seja preciso, completo ou atual. Flamengo Verso pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.
                        </p>
                    </section>

                    <p className="text-sm text-gray-500 mt-8 pt-4 border-t border-neutral-800">
                        Estes termos são efetivos a partir de <strong>Novembro de 2024</strong>.
                    </p>
                </div>
            </div>
        </div>
    );
}
