"use client"
import { User } from "@prisma/client"
import { HeaderDesktopLogo } from "./header-desktop-logo"
import { HeaderDesktopNavbar } from "./header-desktop-navbar"
import { HeaderUserSidebar } from "@/app/components/common/header-user-sidebar"

interface HeaderDesktopProps {
    currentUser: User
}

export const HeaderDesktop = ({ currentUser }: HeaderDesktopProps) => {
    return (
        <header className="hidden lg:block sticky top-0 w-full bg-white dark:bg-[#0C0A09] z-50">
            <div className="py-4 lg:py-6 px-4 lg:px-7 xl:px-12 flex items-center justify-between">
                <div>
                    <HeaderDesktopLogo />
                </div>
                <div className="flex items-center gap-6">
                    <HeaderDesktopNavbar />
                    <div className="hidden lg:flex w-[1px] h-10 bg-zinc-400" />
                    <HeaderUserSidebar currentUser={currentUser} />
                </div>
            </div>
        </header>
    )
}