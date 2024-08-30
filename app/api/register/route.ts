import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import prisma from "@/lib/prismadb"

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const image = formData.get("image")
        const name = formData.get("name")
        const phone = formData.get("phone")
        const email = formData.get("email")
        const password = formData.get("password")

        if (!name || !phone || !email || !password) {
            return NextResponse.json({
                message: "Imcompleted data."
            }, { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password.toString(), 12)
        const user = await prisma.user.create({
            data: {
                image: image ? image.toString() : null,
                name: name.toString(),
                phone: phone.toString(),
                email: email.toString(),
                hashedPassword
            }
        })

        return NextResponse.json(user)
    } catch (error) {
        console.error("Error while register user.", error)
        return NextResponse.json({
            message: "Error while handle register request."
        }, { status: 500 })
    }
}