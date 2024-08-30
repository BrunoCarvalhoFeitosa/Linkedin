"use client"
import Link from "next/link"
import { PeopleIconSvg } from "@/public/svg/people-icon-svg"
import { WorksIconSvg } from "@/public/svg/works-icon-svg"
import { HomeIconSvg } from "@/public/svg/home-icon-svg"
import { MessagesIconSvg } from "@/public/svg/messages-icon-svg"
import { NotificationIconSvg } from "@/public/svg/notification-icon-svg"

export const HeaderDesktopNavbar = () => {
    return (
        <div>
            <nav>
                <ul className="flex justify-center items-start gap-6">
                    <li>
                        <Link
                            href="/app/feed"
                            className="group flex flex-col items-center justify-center"
                        >
                            <div className="w-10 h-10 flex justify-center items-center">
                                <HomeIconSvg
                                    width="25"
                                    height="25"
                                    className="fill-zinc-500 group-hover:fill-zinc-900 active:fill-[group-hover:text-[#0A66C2]"
                                />
                            </div>
                            <div className="-translate-y-1 text-sm text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
                                Início
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="group flex flex-col items-center justify-center"
                        >
                            <div className="w-10 h-10 flex justify-center items-center">
                                <PeopleIconSvg
                                    width="25"
                                    height="20"
                                    className="fill-zinc-500 group-hover:fill-zinc-900 active:fill-[group-hover:text-[#0A66C2]"
                                />
                            </div>
                            <div className="-translate-y-1 text-sm text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
                                Minha rede
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="group flex flex-col items-center justify-center"
                        >
                            <div className="w-10 h-10 flex justify-center items-center">
                                <WorksIconSvg
                                    width="20"
                                    height="20"
                                    className="fill-zinc-500 group-hover:fill-zinc-900 active:fill-[group-hover:text-[#0A66C2]"
                                />
                            </div>
                            <div className="-translate-y-1 text-sm text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
                                Vagas
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="group flex flex-col items-center justify-center"
                        >
                            <div className="w-10 h-10 flex justify-center items-center">
                                <MessagesIconSvg
                                    width="25"
                                    height="25"
                                    className="fill-zinc-500 group-hover:fill-zinc-900 active:fill-[group-hover:text-[#0A66C2]"
                                />
                            </div>
                            <div className="-translate-y-1 text-sm text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
                                Mensagens
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/"
                            className="group flex flex-col items-center justify-center"
                        >
                            <div className="w-10 h-10 flex justify-center items-center">
                                <NotificationIconSvg
                                    width="25"
                                    height="25"
                                    className="fill-zinc-500 group-hover:fill-zinc-900 active:fill-[group-hover:text-[#0A66C2]"
                                />
                            </div>
                            <div className="-translate-y-1 text-sm text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
                                Notificações
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}