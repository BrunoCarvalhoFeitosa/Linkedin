"use client"
import { useState } from "react"
import { User } from "@prisma/client"
import { signOut } from "next-auth/react"
import { formatNameToUrl } from "@/utils/formatters"
import Link from "next/link"
import { UserAvatar } from "@/app/components/application/user-avatar"
import { Button } from "@/app/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet"
import { FaCaretDown } from "react-icons/fa"

interface HeaderUserSidebarProps {
    currentUser: User
}

export const HeaderUserSidebar = ({ currentUser }: HeaderUserSidebarProps) => {
    const [open, setOpen] = useState<boolean>(false)
    
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    className="group py-0 px-0"
                >
                    <div className="flex flex-col">
                        <div className="box-border">
                            <UserAvatar
                                currentUser={currentUser}
                                hasLink={false}
                                width={40}
                                height={40}
                                className="w-10 h-10"
                           /> 
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-sm text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
                                Eu
                            </span>
                            <span>
                                <FaCaretDown className="w-4 h-4 text-zinc-500 group-hover:text-zinc-900" />
                            </span>
                        </div>
                    </div>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className="pt-12 pb-6 flex items-start gap-2 border-b">
                    <div>
                        <UserAvatar
                            currentUser={currentUser}
                            width={80}
                            height={80}
                            className="w-20 h-20"
                        />
                    </div>
                    <div className="w-full">
                        <div className="mb-4">
                            <h3 className="w-full text-lg font-semibold truncate">
                                {currentUser?.name}
                            </h3>
                            <p className="text-sm">
                                Desenvolvedor Front-end Javascript, Typescript, React.js, Next.js, Gatsby, VTEX.
                            </p>
                        </div>
                        <div className="w-full flex-1">
                            <Link
                                href={`/app/profile/${formatNameToUrl(currentUser?.name ?? "")}`}
                                className="py-2 border border-[#0A66C2] transition-colors duration-300 hover:bg-[#0A66C2]/15"
                            >
                                <Button
                                    type="button"
                                    variant="ghost"
                                    className="w-full font-semibold text-[#0A66C2]"
                                    onClick={() => setOpen(false)}
                                >
                                    Ver perfil
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="py-5 border-b">
                    <h3 className="mb-2 text-base font-semibold">
                        Conta
                    </h3>
                    <ul className="flex flex-col gap-1">
                        <li className="text-sm">
                            Configurações e privacidade
                        </li>
                        <li className="text-sm">
                            Ajuda
                        </li>
                        <li className="text-sm">
                            Idioma
                        </li>
                    </ul>
                </div>
                <div className="py-5 border-b">
                    <h3 className="mb-2 text-base font-semibold">
                        Gerenciar
                    </h3>
                    <ul className="flex flex-col gap-1">
                        <li className="text-sm">
                            Publicações e atividades
                        </li>
                        <li className="text-sm">
                            Conta de anúncio da vaga
                        </li>
                    </ul>
                </div>
                <div className="pt-4 w-fit hover:border-b">
                    <Button
                        type="button"
                        variant="ghost"
                        className="py-0 px-0 h-6 rounded-none"
                        onClick={() => signOut()}
                    >
                        Encerrar sessão
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}