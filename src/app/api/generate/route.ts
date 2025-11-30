import { NextResponse } from "next/server";
import { generatePostContent } from "@/services/ai";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { context } = body;

        if (!context) {
            return NextResponse.json(
                { error: "Contexto é obrigatório" },
                { status: 400 }
            );
        }

        const post = await generatePostContent(context);

        return NextResponse.json({ success: true, post });
    } catch (error) {
        console.error("Erro ao gerar post:", error);
        return NextResponse.json(
            { error: "Falha na geração do post" },
            { status: 500 }
        );
    }
}
