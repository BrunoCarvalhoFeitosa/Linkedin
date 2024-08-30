"use client"
import { useState } from "react"
import { User } from "@prisma/client"
import Image from "next/image"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/app/components/ui/dialog"
import { ModalProfileEditBackgroundImage } from "@/app/components/application/modals/modal-profile-edit-background-image"
import { MdModeEdit } from "react-icons/md"

interface ProfileBackgroundCoverProps {
    userProfile: User
}

export const ProfileBackgroundCover = ({ userProfile }: ProfileBackgroundCoverProps) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className="relative">
            <div className="w-full">
                <Image
                    src={userProfile.coverImage ?? "/images/application/image-background-cover.png"}
                    width={1920}
                    height={176}
                    alt="Foto de capa"
                    className="w-full h-44 object-cover overflow-hidden"
                />
            </div>
            <div className="absolute top-8 right-10">
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger className="flex justify-center items-center w-12 h-12 rounded-full bg-[#0A66C2] shadow-xl group-hover:opacity-100">
                        <MdModeEdit className="w-6 h-6 text-white" />
                    </DialogTrigger>
                    <DialogContent>
                        <DialogTitle>
                            Foto de capa
                        </DialogTitle>
                        <div className="mt-5">
                            <ModalProfileEditBackgroundImage
                                setOpen={setOpen}
                                userId={userProfile.id}
                                coverImage={userProfile.coverImage}
                            />
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}