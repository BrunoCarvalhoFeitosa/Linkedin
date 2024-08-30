import { NextApiRequest, NextApiResponse } from "next"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { unstable_getServerSession } from "next-auth"
import prisma from "@/lib/prismadb"

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session?.user?.email) {
    throw new Error("Not signed in.")
  } 

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    }
  })

  if (!currentUser) {
    throw new Error("Not signed in.")
  }

  return { currentUser }
}

export default serverAuth