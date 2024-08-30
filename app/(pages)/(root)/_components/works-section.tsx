"use client"
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/card-3d"
import { FcGoogle } from "react-icons/fc"
import { LuTimer } from "react-icons/lu"

export const WorksSection = () => {
    return (
        <section className="py-12 lg:py-24 px-5 lg:px-10 lg:pl-8 xl:pl-20 2xl:pl-36 w-full">
            <div className="mb-8">
                <h4 className="text-2xl md:text-4xl text-[#526A6E] dark:text-white">
                    Vagas anunciadas recentemente
                </h4>
                <p className="lg:pl-2 text-base">
                    Diariamente mais de 10 mil vagas anunciadas.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-4">
                <CardContainer className="w-full inter-var cursor-move">
                    <CardBody className="relative py-10 px-8 w-full h-auto rounded-xl group/card bg-white dark:bg-[#0E0E0E] dark:hover:bg-[#151515] hover:bg-gray-100 shadow-md">
                        <CardItem
                            as="div"
                            translateZ="60"
                            className="w-full flex justify-end"
                        >
                            <div className="mb-2 flex items-center gap-1">
                                <LuTimer className="w-6 h-6 text-zinc-400" />
                                <p className="text-sm text-zinc-400">
                                    7 dias atrás
                                </p>
                            </div>
                        </CardItem>
                        <CardItem
                            as="div"
                            translateZ="70"
                            className="flex justify-center items-center w-24 h-24 rounded-full border bg-white dark:bg-[#151515]"
                        >
                            <FcGoogle title="Google" className="w-10 h-10" />
                        </CardItem>
                        <CardItem
                            as="div"
                            translateZ="80"
                            className="my-8"
                        >
                            <h5 className="text-xl font-semibold">
                                Desenvolvedor<br />
                                Front-end Next.js & Typescript
                            </h5>
                        </CardItem>
                        <CardItem
                            as="div"
                            translateZ="90"
                            className="my-8"
                        >
                            <p className="text-base text-zinc-500">
                                09 vagas
                            </p>
                        </CardItem>
                    </CardBody>
                </CardContainer>
                <CardContainer className="w-full inter-var cursor-move">
                    <CardBody className="relative py-10 px-8 w-full h-auto rounded-xl group/card bg-white dark:bg-[#0E0E0E] dark:hover:bg-[#151515] hover:bg-gray-100 shadow-md">
                        <CardItem
                            as="div"
                            translateZ="60"
                            className="w-full flex justify-end"
                        >
                            <div className="mb-2 flex items-center gap-1">
                                <LuTimer className="w-6 h-6 text-zinc-400" />
                                <p className="text-[14px] text-zinc-400">
                                    5 dias atrás
                                </p>
                            </div>
                        </CardItem>
                        <CardItem
                            as="div"
                            translateZ="70"
                            className="flex justify-center items-center w-24 h-24 rounded-full border bg-white dark:bg-[#151515]"
                        >
                            <FcGoogle title="Google" className="w-10 h-10" />
                        </CardItem>
                        <CardItem
                            as="div"
                            translateZ="80"
                            className="my-8"
                        >
                            <h5 className="text-xl font-semibold">
                                Desenvolvedor<br />
                                Back-end Java Spring Boot & SQL
                            </h5>
                        </CardItem>
                        <CardItem
                            as="div"
                            translateZ="90"
                            className="my-8"
                        >
                            <p className="text-base text-zinc-500">
                                07 vagas
                            </p>
                        </CardItem>
                    </CardBody>
                </CardContainer>
                <CardContainer className="w-full inter-var cursor-move">
                    <CardBody className="relative py-10 px-8 w-full h-auto rounded-xl group/card bg-white dark:bg-[#0E0E0E] dark:hover:bg-[#151515] hover:bg-gray-100 shadow-md">
                        <CardItem
                            as="div"
                            translateZ="60"
                            className="w-full flex justify-end"
                        >
                            <div className="mb-2 flex items-center gap-1">
                                <LuTimer className="w-6 h-6 text-zinc-400" />
                                <p className="text-[14px] text-zinc-400">
                                    3 dias atrás
                                </p>
                            </div>
                        </CardItem>
                        <CardItem
                            as="div"
                            translateZ="70"
                            className="flex justify-center items-center w-24 h-24 rounded-full border bg-white dark:bg-[#151515]"
                        >
                            <FcGoogle title="Google" className="w-10 h-10" />
                        </CardItem>
                        <CardItem
                            as="div"
                            translateZ="80"
                            className="my-8"
                        >
                            <h5 className="text-xl font-semibold">
                                Cientista de Dados<br />
                                Python & SQL Server & TensorFlow
                            </h5>
                        </CardItem>
                        <CardItem
                            as="div"
                            translateZ="90"
                            className="my-8"
                        >
                            <p className="text-base text-zinc-500">
                                05 vagas
                            </p>
                        </CardItem>
                    </CardBody>
                </CardContainer>
                <CardContainer className="w-full inter-var cursor-move">
                    <CardBody className="relative py-10 px-8 w-full h-auto rounded-xl group/card bg-white dark:bg-[#0E0E0E] dark:hover:bg-[#151515] hover:bg-gray-100 shadow-md">
                        <CardItem
                            as="div"
                            translateZ="60"
                            className="w-full flex justify-end"
                        >
                            <div className="mb-2 flex items-center gap-1">
                                <LuTimer className="w-6 h-6 text-zinc-400" />
                                <p className="text-[14px] text-zinc-400">
                                    1 dia atrás
                                </p>
                            </div>
                        </CardItem>
                        <CardItem
                            as="div"
                            translateZ="70"
                            className="flex justify-center items-center w-24 h-24 rounded-full border bg-white dark:bg-[#151515]"
                        >
                            <FcGoogle title="Google" className="w-10 h-10" />
                        </CardItem>
                        <CardItem
                            as="div"
                            translateZ="80"
                            className="my-8"
                        >
                            <h5 className="text-xl font-semibold">
                                QA Analyst<br />
                                Cypress & Robot Framework
                            </h5>
                        </CardItem>
                        <CardItem
                            as="div"
                            translateZ="90"
                            className="my-8"
                        >
                            <p className="text-base text-zinc-500">
                                03 vagas
                            </p>
                        </CardItem>
                    </CardBody>
                </CardContainer>
            </div>
        </section>
    )
}