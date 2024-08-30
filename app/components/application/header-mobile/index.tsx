"use client"
import { User } from "@prisma/client"
import { HeaderMobileTop } from "@/app/components/application/header-mobile/header-mobile-top"
import { HeaderMobileBottom } from "@/app/components/application/header-mobile/header-mobile-bottom"

interface HeaderMobileProps {
    currentUser: User
}

export const HeaderMobile = ({ currentUser }: HeaderMobileProps) => {
    return (
        <div className="block lg:hidden">
            <HeaderMobileTop currentUser={currentUser} />
            <HeaderMobileBottom />
        </div>
    )
}