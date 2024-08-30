"use client"
import Link from "next/link"
import { ToggleTheme } from "@/app/components/common/toggle-theme"
import { LinkedinLogoSvg } from "@/public/svg/linkedin-logo-svg"
import { ArticlesIconSvg } from "@/public/svg/articles-icon-svg"
import { PeopleIconSvg } from "@/public/svg/people-icon-svg"
import { LearningIconSvg } from "@/public/svg/learning-icon-svg"
import { WorksIconSvg } from "@/public/svg/works-icon-svg"
import { GamesIconSvg } from "@/public/svg/games-icon-svg"

export const HeaderDesktop = () => {
    return (
        <header className="hidden lg:block sticky top-0 w-full bg-white dark:bg-[#0C0A09] z-50">
            <div className="py-4 lg:py-6 px-4 lg:px-7 xl:px-12 flex items-center justify-between">
                <div>
                    <Link href="/">
                        <LinkedinLogoSvg width="135" height="34" />
                    </Link>
                </div>
                <div className="flex items-center gap-6">
                    <div>
                        <nav>
                            <ul className="flex items-start gap-6">
                                <li>
                                    <Link
                                        href="/"
                                        className="group flex flex-col gap-1 items-center justify-center"
                                    >
                                        <div>
                                            <ArticlesIconSvg
                                                width="25"
                                                height="20"
                                                className="fill-zinc-500 group-hover:fill-zinc-900 active:fill-[group-hover:text-[#0A66C2]"
                                            />
                                        </div>
                                        <div className="text-sm text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
                                            Artigos
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="group flex flex-col gap-1 items-center justify-center"
                                    >
                                        <div>
                                            <PeopleIconSvg
                                                width="25"
                                                height="20"
                                                className="fill-zinc-500 group-hover:fill-zinc-900 active:fill-[group-hover:text-[#0A66C2]"
                                            />
                                        </div>
                                        <div className="text-sm text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
                                            Pessoas
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="group flex flex-col gap-1 items-center justify-center"
                                    >
                                        <div>
                                            <LearningIconSvg
                                                width="25"
                                                height="20"
                                                className="fill-zinc-500 group-hover:fill-zinc-900 active:fill-[group-hover:text-[#0A66C2]"
                                            />
                                        </div>
                                        <div className="text-sm text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
                                            Learning
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="group flex flex-col gap-1 items-center justify-center"
                                    >
                                        <div>
                                            <WorksIconSvg
                                                width="25"
                                                height="20"
                                                className="fill-zinc-500 group-hover:fill-zinc-900 active:fill-[group-hover:text-[#0A66C2]"
                                            />
                                        </div>
                                        <div className="text-sm text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
                                            Vagas
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/"
                                        className="group flex flex-col gap-1 items-center justify-center"
                                    >
                                        <div>
                                            <GamesIconSvg
                                                width="25"
                                                height="20"
                                                className="fill-zinc-500 group-hover:fill-zinc-900 active:fill-[group-hover:text-[#0A66C2]"
                                            />
                                        </div>
                                        <div className="text-sm text-zinc-500 group-hover:text-zinc-900 active:text-[#0A66C2]">
                                            Jogos
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="hidden lg:flex w-[1px] h-10 bg-zinc-400" />
                    <div className="flex justify-center items-center gap-3">
                        <div className="text-sm lg:text-base font-semibold text-zinc-900">
                            <Link
                                href="/sign-up"
                                className="py-2 lg:py-3 px-4 dark:text-white dark:hover:text-zinc-900 rounded-full transition-all duration-300 hover:bg-gray-100"
                            >
                                Cadastre-se agora
                            </Link>
                        </div>
                        <div className="text-sm lg:text-base font-semibold text-[#0A66C2] hover:text-white">
                            <Link
                                href="/sign-in"
                                className="py-2 lg:py-3 px-5 lg:px-8 rounded-full border border-[#0A66C2] transition-all duration-300 hover:bg-[#0A66C2]"
                            >
                                Entrar
                            </Link>
                        </div>
                        <div>
                            <ToggleTheme />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}