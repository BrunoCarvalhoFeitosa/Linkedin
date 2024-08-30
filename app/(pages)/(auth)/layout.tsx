"use client"
import { Footer } from "@/app/components/root/footer"
import { HeaderDesktop } from "@/app/components/root/header-desktop"
import { HeaderMobile } from "@/app/components/root/header-mobile"

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div>
            <HeaderDesktop />
            <HeaderMobile />
            <div className="px-5 w-full">
                <div className="py-12 mx-auto w-full lg:w-[70%] xl:w-2/4">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AuthLayout