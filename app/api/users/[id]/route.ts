import { NextResponse } from "next/server"
import prisma from "@/lib/prismadb"

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const { id } = params
    const { image, coverImage, name, description, about, phone, address, email, experience } = await request.json()

    const dataToUpdate: any = {}

    if (image) {
        dataToUpdate.image = image
    }

    if (coverImage) {
        dataToUpdate.coverImage = coverImage
    }

    if (name) {
        dataToUpdate.name = name
    }

    if (description) {
        dataToUpdate.description = description
    }

    if (about) {
        dataToUpdate.about = about
    }

    if (phone) {
        dataToUpdate.phone = phone
    }

    if (address) {
        dataToUpdate.address = address
    }

    if (email) {
        dataToUpdate.email = email
    }

    if (experience) {
        dataToUpdate.experience = experience
    }

    if (Object.keys(dataToUpdate).length > 0) {
        try {
            const user = await prisma.user.update({
                where: { id },
                data: dataToUpdate,
            })

            return NextResponse.json(user, { status: 200 })
        } catch (error) {
            console.error("Erro ao atualizar o usuário:", error)
            return NextResponse.json({ error: "Erro ao atualizar o usuário" }, { status: 500 })
        }
    } else {
        return NextResponse.json({ error: "Nenhum dado fornecido para atualização" }, { status: 400 })
    }
}
