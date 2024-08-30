"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { PeopleIconSvg } from "@/public/svg/people-icon-svg"
import { WorksIconSvg } from "@/public/svg/works-icon-svg"
import { HomeIconSvg } from "@/public/svg/home-icon-svg"
import { MessagesIconSvg } from "@/public/svg/messages-icon-svg"
import { NotificationIconSvg } from "@/public/svg/notification-icon-svg"

export const HeaderMobileBottom = () => {
    const [isVisible, setIsVisible] = useState(true)
    const lastScrollTop = useRef(0)
  
    const handleScroll = () => {
        const currentScrollTop = window.scrollY
  
        if (currentScrollTop > lastScrollTop.current) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
  
        lastScrollTop.current = currentScrollTop
    }
  
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className={`fixed lg:hidden ${isVisible ? "translate-y-0": "translate-y-full"} bottom-0 w-full bg-white transition-transform duration-500 z-50`}>
            <nav className="border-t py-1 px-4">
                <ul className="flex justify-center items-start gap-6">
                    <li>
                        <Link
                            href="/app/feed"
                            className="group flex flex-col items-center justify-center"
                        >
                            <div className="w-10 h-10 flex justify-center items-center">
                                <HomeIconSvg
                                    width="25"
                                    height="23"
                                    className="fill-zinc-500 group-hover:fill-zinc-900 active:fill-[group-hover:text-[#0A66C2]"
                                />
                            </div>
                            <div className="-translate-y-2 text-xs text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
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
                            <div className="-translate-y-2 text-xs text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
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
                            <div className="-translate-y-2 text-xs text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
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
                            <div className="-translate-y-2 text-xs text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
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
                            <div className="-translate-y-2 text-xs text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
                                Notificações
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}