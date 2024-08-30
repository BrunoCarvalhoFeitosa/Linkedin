"use client"
import { User } from "@prisma/client"
import { UserAvatar } from "@/app/components/application/user-avatar"
import { PiBookmarksSimpleFill } from "react-icons/pi"
import Image from "next/image"

interface UserSideProfileCardProps {
    currentUser: User
}

export const UserSideProfileCard = ({ currentUser }: UserSideProfileCardProps) => {
    return (
        <div className="w-full lg:w-80 border">
            <div className="relative h-36">
                {currentUser?.coverImage ? (
                    <div className="w-full h-20 bg-gray-200">
                        <Image
                            src={currentUser.coverImage}
                            width={600}
                            height={80}
                            alt="Imagem de capa"
                        />
                    </div>
                ) : (
                    <div className="w-full h-20 bg-gray-200">
                        <Image
                            src="/images/application/image-background-cover.png"
                            width={600}
                            height={80}
                            alt="Imagem de capa"
                        />
                    </div>
                )}
                <div className="absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4">
                    <UserAvatar
                        currentUser={currentUser}
                        hasLink={true}
                        width={128}
                        height={128}
                        className="w-28 h-28"
                    />
                </div>
            </div>
            <div className="px-4 pb-5 w-full text-center border-b">
                <h2 className="w-full text-lg font-semibold truncate">
                    {currentUser?.name}
                </h2>
                <p className="text-sm">
                    Desenvolvedor Front-end Javascript, Typescript, React.js, Next.js, Gatsby, VTEX.
                </p>
            </div>
            <div className="p-5 flex flex-col gap-2 border-b">
                <div className="flex justify-between items-center">
                    <span className="text-sm">
                        Visualizações do perfil
                    </span>
                    <span className="text-sm font-semibold text-[#0A66C2]">
                        415
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm">
                        Impressões de publicação
                    </span>
                    <span className="text-sm font-semibold text-[#0A66C2]">
                        2667
                    </span>
                </div>
            </div>
            <div className="p-5 border-b">
                <h3 className="text-sm font-semibold">
                    Acesse ferramentas exclusivas
                </h3>
                <p className="text-sm">
                    Experimente o Premium por 20BRL
                </p>
            </div>
            <div className="p-5 flex items-center gap-1">
                <div className="text-zinc-500">
                    <PiBookmarksSimpleFill className="w-6 h-6" />
                </div>
                <div className="text-zinc-500">
                    <h3 className="text-sm font-semibold">
                        Itens salvos
                    </h3>
                </div>
            </div>
        </div>
    )
}