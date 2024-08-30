"use client"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import { BentoGrid, BentoGridItem } from "@/app/components/ui/bento-grid"
import { ProtectedDataSvg } from "@/public/svg/protected-data-svg"
import { AiFillPicture } from "react-icons/ai"
import { FaVideo } from "react-icons/fa"
import { BsFillChatSquareTextFill } from "react-icons/bs"
 
export const CardsSection = () => {
    return (
        <div className="lg:mt-20 px-5 lg:pl-8 xl:pl-20 2xl:pl-36 w-full">
            <div>
                <BentoGrid>
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={cn("[&>p:text-lg]", item.className)}
                        />
                    ))}
                </BentoGrid>
            </div>
        </div>
    )
}
 
const SkeletonOne = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    }

    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    }
 
    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] py-[7px] px-4 items-center space-x-2 bg-white dark:bg-[#0E0E0E] dark:hover:bg-[#151515]"
            >
                <AiFillPicture className="w-8 h-8 text-[#0A66C2]" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] py-[7px] px-4 items-center space-x-2 bg-white dark:bg-[#0E0E0E] dark:hover:bg-[#151515]"
            >
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                <FaVideo className="w-8 h-8 text-[#0A66C2]" />
            </motion.div>
            <motion.div
                variants={variants}
                className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] py-[7px] px-4 items-center space-x-2 bg-white dark:bg-[#0E0E0E] dark:hover:bg-[#151515]"
            >
                <BsFillChatSquareTextFill className="w-7 h-7 text-[#0A66C2]" />
                <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
            </motion.div>
        </motion.div>
    )
}

const SkeletonTwo = () => {
    const variants = {
        initial: {
            width: 0,
        },
        animate: {
            width: "100%",
            transition: {
                duration: 0.2,
            },
        },
        hover: {
            width: ["0%", "100%"],
            transition: {
                duration: 2,
            },
        },
    }

    const arr = new Array(5).fill(0)

    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            {arr.map((_, i) => (
                <motion.div
                    key={"skelenton-two" + i}
                    variants={variants}
                    style={{
                        maxWidth: Math.random() * (100 - 40) + 40 + "%",
                    }}
                    className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-[#0E0E0E] dark:hover:bg-[#151515] w-full h-4"
                />
            ))}
        </motion.div>
    )
}

const SkeletonThree = () => {
    return (
        <div className="flex justify-center items-center">
            <ProtectedDataSvg width="145" height="145" />
        </div>
    )
}

const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    }

    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    }

    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-col md:flex-row flex-1 w-full h-full min-h-[6.5rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-x-2"
        >
            <motion.div
                variants={first}
                className="w-full md:w-1/3 h-full rounded-2xl bg-white py-8 px-3 dark:bg-[#0E0E0E] dark:hover:bg-[#151515] dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <Image
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Foto de perfil usuário"
                    height="100"
                    width="100"
                    className="rounded-full w-12 h-12 object-cover object-top"
                />
                <p className="text-xs text-center mt-2">
                    Bruno Carvalho Feitosa
                </p>
                <p className="text-xs text-center font-semibold text-neutral-500">
                    Desenvolvedor Fullstack
                </p>
            </motion.div>
            <motion.div className="relative w-full md:w-1/3 h-full rounded-2xl bg-white py-8 px-3 dark:bg-[#0E0E0E] dark:hover:bg-[#151515] dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center z-20">
                <Image
                    src="https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Foto de perfil usuário"
                    height="100"
                    width="100"
                    className="rounded-full w-12 h-12 object-cover object-top"
                />
                <p className="text-xs text-center mt-2">
                    Gabriela Gonçalves Santos 
                </p>
                <p className="text-xs text-center font-semibold text-neutral-500">
                    Desenvolvedora Front-end
                </p>
            </motion.div>
            <motion.div
                variants={second}
                className="w-full md:w-1/3 h-full rounded-2xl bg-white py-8 px-3 dark:bg-[#0E0E0E] dark:hover:bg-[#151515] dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <Image
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                    alt="Foto de perfil usuário"
                    height="100"
                    width="100"
                    className="rounded-full w-12 h-12 object-cover object-top"
                />
                <p className="text-xs text-center mt-2">
                    Diego Alves Silva
                </p>
                <p className="text-xs text-center font-semibold text-neutral-500">
                    Desenvolvedor Back-end
                </p>
            </motion.div>
        </motion.div>
    )
}

const SkeletonFive = () => {
    const variants = {
        initial: {
            x: 0,
        },
        animate: {
            x: 10,
            rotate: 5,
            transition: {
                duration: 0.2,
            },
        },
    }

    const variantsSecond = {
        initial: {
            x: 0,
        },
        animate: {
            x: -10,
            rotate: -5,
            transition: {
                duration: 0.2,
            },
        },
    }

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            <motion.div
                variants={variants}
                className="flex flex-row rounded-md border border-zinc-200 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-[#0E0E0E] dark:hover:bg-[#151515]"
            >
                <Image
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Foto de perfil usuário"
                    height="100"
                    width="100"
                    className="rounded-full w-12 h-12 object-cover object-top"
                />
                <p className="flex-1 text-xs text-neutral-500 dark:text-white">
                    Olá Ana, possuo interesse na vaga anunciada. Possuo sólidos
                    conhecimentos em Next.js, Typescript e GraphQL.
                </p>
            </motion.div>
            <motion.div
                variants={variantsSecond}
                className="flex lg:hidden xl:flex flex-row rounded-md border border-zinc-200 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-[#0E0E0E] dark:hover:bg-[#151515]"
            >
                <p className="flex-1 text-xs text-neutral-500 dark:text-white">
                    Olá Bruno, tudo bem? Podemos bater um papo ainda hoje para falar da vaga?
                </p>
                <Image
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                    alt="Foto de perfil usuário"
                    height="100"
                    width="100"
                    className="rounded-full w-12 h-12 object-cover object-top"
                />
            </motion.div>
        </motion.div>
    )
}

const items = [
    {
        title: "Crie um post",
        description: (
            <span className="text-sm">
                Crie um post, anexe arquivos,
                documentos e interaja com a sua rede. 
            </span>
        ),
        header: <SkeletonOne />,
        className: "md:col-span-1",
    },
    {
        title: "Busque por vagas de trabalho",
        description: (
            <span className="text-sm">
                Encontre vagas no setor em que trabalha, veja o salário e localidade.
            </span>
        ),
        header: <SkeletonTwo />,
        className: "md:col-span-1",
    },
    {
        title: "Seus dados pessoais seguros",
        description: (
            <span className="text-sm">
                Seguimos a LGPD, todo o processamento
                de dados é feito de maneira segura.
            </span>
        ),
        header: <SkeletonThree />,
        className: "md:col-span-2 lg:col-span-1 text-center lg:text-left",
    },
    {
        title: "Conheça pessoas e faça networking",
        description: (
            <span className="text-sm">
                Adicione pessoas correlatas a área em que você trabalha e
                aumente as chances de conseguir se recolocar no mercado de trabalho.
                Procure por recrutadores, faça conexão, envie mensagens e expanda suas chances.
            </span>
        ),
        header: <SkeletonFour />,
        className: "md:col-span-2",
    },
    {
        title: "Use o chat ou faça chamadas de vídeo",
        description: (
            <span className="text-sm">
                Com o chat e chamada de vídeo você aumenta as chances de ser recrutado.
            </span>
        ),
        header: <SkeletonFive />,
        className: "md:col-span-2 lg:col-span-1",
    },
]