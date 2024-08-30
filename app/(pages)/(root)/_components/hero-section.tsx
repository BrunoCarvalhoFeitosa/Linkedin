"use client"
import Image from "next/image"
import Link from "next/link"
import { words } from "@/constants"
import { FlipWords } from "@/app/components/ui/flip-words"
import { AiOutlineMail } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

export const HeroSection = () => {
    return (
        <section className="py-7 md:py-12 lg:py-0 lg:pl-8 xl:pl-20 2xl:pl-36 w-full">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="px-5 lg:px-0 w-full lg:w-[45%] xl:w-[42%] overflow-hidden">
                    <div className="lg:py-5">
                        <div className="pb-5">
                            <h1 className="text-5xl md:text-7xl lg:text-6xl xl:text-[68px] 2xl:text-[105px] lg:leading-[4.8rem] xl:leading-[5rem] 2xl:leading-[8rem] text-[#526A6E] dark:text-white">
                                Conheça sua <br />comunidade <br /> <FlipWords words={words} className="text-[#526A6E] dark:text-white" />
                            </h1>
                        </div>
                        <div className="flex justify-center items-center flex-col gap-3">
                            <Link
                                href="/sign-in"
                                className="flex justify-center items-center gap-2 w-full py-3 border border-zinc-400 rounded-md transition-all hover:bg-gray-100"
                            >
                                <FcGoogle className="w-6 h-6" />
                                    Entrar com o Google
                            </Link>
                            <Link
                                href="/sign-in"
                                className="flex justify-center items-center gap-2 w-full py-3 border border-zinc-400 rounded-md transition-all hover:bg-gray-100"
                            >
                                <AiOutlineMail className="w-6 h-6" />
                                Entrar com um e-mail
                            </Link>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p className="text-xs 2xl:text-base">
                            Ao clicar em Continuar para se cadastrar ou entrar, você aceita o <Link className="text-blue-500 hover:underline" href="/legal/user-agreement">Contrato do Usuário</Link>, a <Link className="text-blue-500 hover:underline" href="/legal/privacy-policy">Política de Privacidade</Link> e a <Link className="text-blue-500 hover:underline" href="/legal/cookies-policy">Política de Cookies</Link> do LinkedIn.
                        </p>
                    </div>
                    <div className="mt-3 2xl:mt-5">
                        <p className="text-base 2xl:text-xl">
                            Ainda não faz parte do LinkedIn? <Link className="font-semibold text-blue-500 hover:underline" href="/sign-up">Cadastre-se agora</Link>
                        </p>
                    </div>
                </div>
                <div className="w-full flex flex-1 justify-end overflow-hidden">
                    <Image
                        src="/images/root/image-home-hero.png"
                        width={540}
                        height={500}
                        alt=""
                        className="w-full object-cover dark:opacity-70 transition-transform duration-300 lg:hover:scale-125 cursor-zoom-in"
                    />
                </div>
            </div>
        </section>
    )
}