"use client"
import { people } from "@/constants"
import { AnimatedTooltip } from "@/app/components/ui/animated-tooltip"

export const ResultsSection = () => {
    return (
        <section className="py-24 px-5 w-full">
            <div className="flex items-center gap-6">
                <div className="flex-1 w-full">
                    <div className="flex flex-row items-center justify-center mb-10 w-full">
                        <AnimatedTooltip items={people} />
                    </div>
                    <div>
                        <p>
                            O LinkedIn é a plataforma mais eficiente para recrutamento e seleção,
                            encontre fácilmente empregos próximos à sua localidade.
                        </p>
                    </div>
                </div>
                <div className="w-2/3 flex gap-10">
                    <div className="flex flex-col items-center">
                        <strong className="text-4xl font-bold">
                            +12.000.000
                        </strong>
                        <p className="text-sm">
                            Usuários cadastrados
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <strong className="text-4xl font-bold">
                            4.300.000
                        </strong>
                        <p className="text-sm">
                            Recrutadores trabalhando em vagas
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}