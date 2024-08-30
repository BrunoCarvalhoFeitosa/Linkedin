import prisma from "@/lib/prismadb"

export default async function getUserProfile(name: string) {
    try {
        const userProfile = await prisma.user.findMany({
            where: {
                name: name
            }
        })

        if (!userProfile) {
            return null
        }

        return userProfile[0]
    } catch (error: any) {
        return null
    }
}