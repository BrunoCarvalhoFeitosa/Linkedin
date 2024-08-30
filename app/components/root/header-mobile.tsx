"use client"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/app/components/ui/sheet"
import { ToggleTheme } from "@/app/components/common/toggle-theme"
import { LinkedinLogoSvg } from "@/public/svg/linkedin-logo-svg"
import { ArticlesIconSvg } from "@/public/svg/articles-icon-svg"
import { PeopleIconSvg } from "@/public/svg/people-icon-svg"
import { LearningIconSvg } from "@/public/svg/learning-icon-svg"
import { WorksIconSvg } from "@/public/svg/works-icon-svg"
import { GamesIconSvg } from "@/public/svg/games-icon-svg"
import { CgMenuGridR } from "react-icons/cg"

export const HeaderMobile = () => {
    return (
        <header className="block lg:hidden sticky top-0 w-full bg-white dark:bg-[#0C0A09] z-50">
            <div className="py-4 lg:py-6 px-4 lg:px-12 flex items-center justify-between">
                <div>
                    <Link href="/">
                        <LinkedinLogoSvg width="120" height="28" />
                    </Link>
                </div>
                <div className="flex items-center gap-3">
                    <ToggleTheme />
                    <Sheet>
                        <SheetTrigger>
                            <CgMenuGridR className="w-10 h-10 text-[#0A66C2]" />
                        </SheetTrigger>
                        <SheetContent>
                            <div className="w-full h-full flex flex-col justify-between">
                                <div className="w-full h-full flex items-center">
                                    <nav>
                                        <ul className="flex flex-col items-start gap-6">
                                            <li>
                                                <Link
                                                    href="/"
                                                    className="group flex gap-2 items-center justify-center"
                                                >
                                                    <div className="mr-1 flex justify-center items-center">
                                                        <ArticlesIconSvg
                                                            width="25"
                                                            height="25"
                                                            className="fill-zinc-500 group-hover:fill-black active:fill-[group-hover:text-[#0A66C2]"
                                                        />
                                                    </div>
                                                    <div className="text-base text-zinc-500 group-hover:text-black active:text-[#0A66C2]">
                                                        Artigos
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/"
                                                    className="group flex gap-2 items-center justify-center"
                                                >
                                                    <div className="flex justify-center items-center">
                                                        <PeopleIconSvg
                                                            width="30"
                                                            height="25"
                                                            className="fill-zinc-500 group-hover:fill-black active:fill-[group-hover:text-[#0A66C2]"
                                                        />
                                                    </div>
                                                    <div className="text-base text-zinc-500 group-hover:text-black active:text-[#0A66C2]">
                                                        Pessoas
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/"
                                                    className="group flex gap-2 items-center justify-center"
                                                >
                                                    <div className="flex justify-center items-center">
                                                        <LearningIconSvg
                                                            width="30"
                                                            height="25"
                                                            className="fill-zinc-500 group-hover:fill-black active:fill-[group-hover:text-[#0A66C2]"
                                                        />
                                                    </div>
                                                    <div className="text-base text-zinc-500 group-hover:text-black active:text-[#0A66C2]">
                                                        Learning
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/"
                                                    className="group flex gap-2 items-center justify-center"
                                                >
                                                    <div className="flex justify-center items-center">
                                                        <WorksIconSvg
                                                            width="30"
                                                            height="25"
                                                            className="fill-zinc-500 group-hover:fill-black active:fill-[group-hover:text-[#0A66C2]"
                                                        />
                                                    </div>
                                                    <div className="text-base text-zinc-500 group-hover:text-black active:text-[#0A66C2]">
                                                        Vagas
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href="/"
                                                    className="group flex gap-2 items-center justify-center"
                                                >
                                                    <div className="flex justify-center items-center">
                                                        <GamesIconSvg
                                                            width="25"
                                                            height="25"
                                                            className="fill-zinc-500 group-hover:fill-black active:fill-[group-hover:text-[#0A66C2]"
                                                        />
                                                    </div>
                                                    <div className="text-base text-zinc-500 group-hover:text-black active:text-[#0A66C2]">
                                                        Jogos
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-sm font-semibold text-zinc-900">
                                        <Link
                                            href="/sign-up"
                                            className="py-2"
                                        >
                                            Cadastre-se agora
                                        </Link>
                                    </div>
                                    <div className="text-base font-semibold text-[#0A66C2] hover:text-white">
                                        <Link
                                            href="/sign-in"
                                            className="py-2 lg:py-3 px-5 lg:px-8 rounded-full border border-[#0A66C2] transition-all duration-300 hover:bg-[#0A66C2]"
                                        >
                                            Entrar
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}