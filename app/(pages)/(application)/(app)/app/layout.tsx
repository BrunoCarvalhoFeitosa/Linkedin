import getCurrentUser from "@/app/actions/getCurrentUser"
import { redirect } from "next/navigation"
import { HeaderDesktop } from "@/app/components/application/header-desktop"
import { HeaderMobile} from "@/app/components/application/header-mobile"

interface AppLayoutProps {
    children: React.ReactNode
}

const AppLayout = async ({ children }: AppLayoutProps) => {
    const currentUser = await getCurrentUser()

    if (!currentUser) (
        redirect("/")
    )

    return (
        <div>
            <HeaderDesktop currentUser={currentUser} />
            <HeaderMobile currentUser={currentUser} />
            {children}
        </div>
    )
}

export default AppLayout