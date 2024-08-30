"use client"
import { User } from "@prisma/client"
import { useRouter } from "next/navigation"
import { formatNameToUrl } from "@/utils/formatters"
import Image from "next/image"

interface UserAvatarProps {
    currentUser: User
    hasLink?: boolean
    width: number
    height: number
    className: string
}

export const UserAvatar = ({ currentUser, hasLink, width, height, className }: UserAvatarProps) => {
    const router = useRouter()
    const url = `/app/profile/${formatNameToUrl(currentUser?.name as string)}`

    return (
        <div>
            {hasLink ? (
                <div
                    onClick={() => router.push(url)}
                    className={className}
                >
                    <Image
                        src={currentUser?.image as string}
                        width={width}
                        height={height}
                        alt={currentUser?.name as string}
                        className="m-0 p-0 w-full h-full object-cover overflow-hidden rounded-full border-4 border-white cursor-pointer"
                    />
                </div>
            ) : (
                <div className={className}>
                    <Image
                        src={currentUser?.image as string}
                        width={width}
                        height={height}
                        alt={currentUser?.name as string}
                        className="m-0 p-0 w-full h-full object-cover overflow-hidden rounded-full border-white shadow-xl cursor-pointer"
                    />
                </div>
            )}
        </div>
    )
}