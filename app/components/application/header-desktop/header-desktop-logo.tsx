"use client"
import Link from "next/link"
import { LinkedinLogoSvg } from "@/public/svg/linkedin-logo-svg"

export const HeaderDesktopLogo = () => {
    return (
        <div>
            <Link href="/app/feed">
                <LinkedinLogoSvg width="135" height="34" />
            </Link>
        </div>
    )
}