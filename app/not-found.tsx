"use client"
import { Button } from "@/app/components/ui/button"
import { HeaderDesktop } from "@/app/components/root/header-desktop"
import { HeaderMobile } from "@/app/components/root/header-mobile"
import { Footer } from "@/app/components/root/footer"
import { useRouter } from "next/navigation"

const NotFoundPage = () => {
    const router = useRouter()

    return (
        <div>
            <HeaderDesktop />
            <HeaderMobile />
            <main className="pt-10 md:pt-20 pb-10 px-4 mx-auto flex flex-col justify-center items-center lg:w-[700px]">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#526A6E] dark:text-white">
                    Página não encontrada
                </h1>
                <p className="mt-2 mb-4 text-center">
                    A página que você está procurando não foi encontrada. Volte para a página anterior ou visite nossa Central de Ajuda para mais informações.
                </p>
                <Button
                    className="py-5 px-6 md:px-10 w-full md:w-fit h-12 text-lg font-semibold text-white rounded-md bg-[#0A66C2]"
                    onClick={() => router.back()}
                >
                    Voltar para a página anterior
                </Button>
            </main>
            <Footer />
        </div>
    )
}

export default NotFoundPage