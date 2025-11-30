"use client";

import React, { useState } from "react";
import Link from "next/link";
import { quizQuestions } from "@/data/engagement";

export default function QuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const handleAnswerOptionClick = (option: string) => {
        if (selectedOption) return; // Evita múltiplos cliques

        setSelectedOption(option);
        const correct = option === quizQuestions[currentQuestion].answer;
        setIsCorrect(correct);

        if (correct) {
            setScore(score + 1);
        }

        setTimeout(() => {
            const nextQuestion = currentQuestion + 1;
            if (nextQuestion < quizQuestions.length) {
                setCurrentQuestion(nextQuestion);
                setSelectedOption(null);
                setIsCorrect(null);
            } else {
                setShowScore(true);
            }
        }, 1500);
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption(null);
        setIsCorrect(null);
    };

    return (
        <div className="min-h-screen text-white py-12 px-4 flex flex-col items-center">
            <Link href="/torcida" className="mb-8 text-gray-400 hover:text-white transition-colors">
                &larr; Voltar para Área da Torcida
            </Link>

            <div className="max-w-2xl w-full bg-neutral-900/80 backdrop-blur-sm p-8 rounded-2xl border border-neutral-800 shadow-2xl">
                <h1 className="text-3xl font-bold text-center mb-2 text-blue-500">Quiz Rubro-Negro 🧠</h1>
                <p className="text-center text-gray-400 mb-8">
                    Teste seus conhecimentos sobre o Mengão!
                </p>

                {showScore ? (
                    <div className="text-center py-8 animate-in fade-in zoom-in duration-500">
                        <div className="text-6xl mb-4">🏆</div>
                        <h2 className="text-2xl font-bold mb-4">Você acertou {score} de {quizQuestions.length} questões!</h2>
                        <p className="text-gray-300 mb-8">
                            {score === quizQuestions.length
                                ? "Parabéns! Você é um torcedor Raiz!"
                                : "Continue estudando a história do Mais Querido!"}
                        </p>
                        <button
                            onClick={resetQuiz}
                            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                        >
                            Jogar Novamente
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-8">
                            <div className="flex justify-between text-sm text-gray-400 mb-2">
                                <span>Questão {currentQuestion + 1}/{quizQuestions.length}</span>
                                <span>Pontos: {score}</span>
                            </div>
                            <div className="w-full bg-neutral-800 rounded-full h-2">
                                <div
                                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                                />
                            </div>
                        </div>

                        <h2 className="text-xl font-semibold mb-6 min-h-[60px]">
                            {quizQuestions[currentQuestion].question}
                        </h2>

                        <div className="space-y-3">
                            {quizQuestions[currentQuestion].options.map((option) => {
                                let buttonClass = "bg-neutral-800 hover:bg-neutral-700 border-neutral-700";

                                if (selectedOption === option) {
                                    buttonClass = isCorrect
                                        ? "bg-green-600 border-green-500 text-white"
                                        : "bg-red-600 border-red-500 text-white";
                                } else if (selectedOption && option === quizQuestions[currentQuestion].answer) {
                                    buttonClass = "bg-green-600 border-green-500 text-white opacity-50";
                                }

                                return (
                                    <button
                                        key={option}
                                        onClick={() => handleAnswerOptionClick(option)}
                                        disabled={!!selectedOption}
                                        className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${buttonClass}`}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
