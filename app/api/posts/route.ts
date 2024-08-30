import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import serverAuth from "@/lib/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(request: NextApiRequest, response: NextApiResponse) {
  try {
    const { currentUser } = await serverAuth(request, response)

    // Ler e analisar o corpo da requisição
    const data = await request.body
    const { body } = data;

    // Verificar se o corpo da requisição está presente
    if (!body) {
      return NextResponse.json({ message: "Incomplete data." }, { status: 400 });
    }

    // Criar o post usando o ID do usuário autenticado
    const post = await prisma.post.create({
      data: {
        body,
        userId: currentUser.id
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error while creating post:", error);
    return NextResponse.json({ message: "Error while creating post." }, { status: 500 });
  }
}
