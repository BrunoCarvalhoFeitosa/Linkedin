"use client"
import { useEffect, useRef, useState } from "react"
import { User } from "@prisma/client"
import Link from "next/link"
import { HeaderUserSidebar } from "@/app/components/common/header-user-sidebar"
import { LinkedinLogoSvg } from "@/public/svg/linkedin-logo-svg"

interface HeaderMobileTopProps {
    currentUser: User
}

export const HeaderMobileTop = ({ currentUser }: HeaderMobileTopProps) => {
    const [isVisible, setIsVisible] = useState(true)
    const lastScrollTop = useRef(0)
  
    const handleScroll = () => {
        const currentScrollTop = window.scrollY
  
        if (currentScrollTop > lastScrollTop.current) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
  
        lastScrollTop.current = currentScrollTop
    }
  
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className={`fixed lg:hidden ${isVisible ? "translate-y-0" : "-translate-y-full"} top-0 w-full px-4 py-4 border-b bg-white transition-transform duration-300 z-50`}>
            <div className="flex justify-between items-center">
                <div>
                    <Link href="/app/feed">
                        <LinkedinLogoSvg width="120" height="28" />
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <HeaderUserSidebar currentUser={currentUser} />
                </div>
            </div>
        </div>
    )
}