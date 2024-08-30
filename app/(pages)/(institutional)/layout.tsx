import { Footer } from "@/app/components/root/footer"
import { HeaderDesktop } from "@/app/components/root/header-desktop"
import { HeaderMobile } from "@/app/components/root/header-mobile"

interface PrivacyPolicyLayoutProps {
    children: React.ReactNode
}

const PrivacyPolicyLayout = ({ children }: PrivacyPolicyLayoutProps) => {
    return (
        <div>
            <HeaderDesktop />
            <HeaderMobile />
            <main className="py-6">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default PrivacyPolicyLayout