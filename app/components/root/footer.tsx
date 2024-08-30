"use client"

import { LinkedinLogoSvg } from "@/public/svg/linkedin-logo-svg"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="w-full">
            <div className="relative px-5 xl:px-0 w-full h-[400px] md:h-[640px]">
                <Image
                    src="/images/root/image-footer.png"
                    width={0}
                    height={0}
                    fill
                    layout="fill"
                    alt=""
                    className="w-full h-full object-cover dark:brightness-50"
                />
            </div>
            <div className="py-10 xl:py-8 px-5 xl:px-12 w-full">
                <div className="flex flex-col xl:flex-row justify-between">
                    <div className="flex justify-center md:justify-start mb-8 xl:mb-0">
                        <Link href="/">
                            <LinkedinLogoSvg
                                width="120"
                                height="28"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 place-items-center md:place-items-start gap-16 lg:gap-24 xl:gap-16 2xl:gap-32">
                        <div className="text-center md:text-start">
                            <h6 className="mb-3 text-lg font-semibold">
                                Geral
                            </h6>
                            <ul className="flex flex-col gap-2">
                                <li className="text-base hover:underline cursor-pointer">
                                    Sobre
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Blog
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Carreiras
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Imprensa
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Cadastre-se
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Central de ajuda
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Desenvolvedores
                                </li>
                            </ul>
                        </div>
                        <div className="text-center md:text-start">
                            <h6 className="mb-3 text-lg font-semibold">
                                Navegar pelo Linkedin
                            </h6>
                            <ul className="flex flex-col gap-2">
                                <li className="text-base hover:underline cursor-pointer">
                                    Vagas
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Jogos
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Salário
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Serviços
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Soluções
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Learning
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Top Companies
                                </li>
                            </ul>
                        </div>
                        <div className="text-center md:text-start">
                            <h6 className="mb-3 text-lg font-semibold">
                                Soluções Business
                            </h6>
                            <ul className="flex flex-col gap-2">
                                <li className="text-base hover:underline cursor-pointer">
                                    Vendas
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Talentos
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Marketing
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Comunidade
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Crie seu jogo
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Promova vagas
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    LinkedIn Premium
                                </li>
                            </ul>
                        </div>
                        <div className="md:hidden xl:block text-center md:text-start">
                            <h6 className="mb-3 text-lg font-semibold">
                                Diretórios
                            </h6>
                            <ul className="flex flex-col gap-2">
                                <li className="text-base hover:underline cursor-pointer">
                                    Usuários
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Artigos
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Notícias
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Empresas
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Newsletter
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Publicações
                                </li>
                                <li className="text-base hover:underline cursor-pointer">
                                    Em destaque
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-5 py-10 w-full bg-gray-100 dark:bg-[#0D0D0D]">
                <div className="flex justify-center items-center gap-5">
                    <ul className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-2 xl:gap-5">
                        <li className="text-sm text-zinc-900 dark:text-white hover:underline cursor-pointer">
                            LinkedIn © 2024
                        </li>
                        <li className="text-sm text-zinc-900 dark:text-white hover:underline cursor-pointer">
                            <Link href="/about">
                                Sobre
                            </Link>
                        </li>
                        <li className="text-sm text-zinc-900 dark:text-white hover:underline cursor-pointer">
                            <Link href="/accessibility">
                                Acessibilidade
                            </Link>
                        </li>
                        <li className="md:hidden xl:block text-sm text-zinc-900 dark:text-white hover:underline cursor-pointer">
                            <Link href="/legal/user-agreement">
                                Contrato do Usuário
                            </Link>
                        </li>
                        <li className="text-sm text-zinc-900 dark:text-white hover:underline cursor-pointer">
                            <Link href="/legal/privacy-policy">
                                Política de Privacidade
                            </Link>
                        </li>
                        <li className="text-sm text-zinc-900 dark:text-white hover:underline cursor-pointer">
                            <Link href="/legal/cookies-policy">
                                Política de Cookies
                            </Link>
                        </li>
                        <li className="md:hidden lg:block text-sm text-zinc-900 dark:text-white hover:underline cursor-pointer">
                            <Link href="/legal/copyright-policy">
                                Política de Direitos Autorais
                            </Link>
                        </li>
                        <li className="text-sm text-zinc-900 dark:text-white hover:underline cursor-pointer">
                            <Link href="/legal/brand-policy">
                                Política da Marca
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex">
                <div className="flex-1 h-[6px] bg-[#0A66C2] opacity-100" />
                <div className="flex-1 h-[6px] bg-[#0A66C2] opacity-80" />
                <div className="flex-1 h-[6px] bg-[#0A66C2] opacity-60" />
            </div>
        </footer>
    )
}