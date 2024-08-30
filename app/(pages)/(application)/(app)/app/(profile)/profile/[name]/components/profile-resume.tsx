"use client"
import { useState } from "react"
import { User } from "@prisma/client"
import { UserAvatar } from "@/app/components/application/user-avatar"
import { Skeleton } from "@/app/components/ui/skeleton"
import { Button } from "@/app/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/app/components/ui/dialog"
import { ModalProfileEditResume } from "@/app/components/application/modals/modal-profile-edit-resume"
import { MdModeEdit } from "react-icons/md"
import { BiDotsHorizontal } from "react-icons/bi"
import { TbMessageFilled } from "react-icons/tb"
import { AiOutlinePlus } from "react-icons/ai"

interface ProfileResumeProps {
    userProfile: User
}

export const ProfileResume = ({ userProfile }: ProfileResumeProps) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <section className="group -mt-16 px-4 lg:px-12 z-10">
            <div className="flex justify-between items-end">
                <div className="relative flex items-end">
                    <UserAvatar
                        currentUser={userProfile}
                        width={128}
                        height={128}
                        className="w-28 h-28 lg:w-32 lg:h-32"
                    />
                    <div className="mb-8">
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger className="absolute top-2 -right-2 flex justify-center items-center w-12 h-12 lg:opacity-0 lg:invisible rounded-full bg-[#0A66C2] shadow-xl group-hover:opacity-100 group-hover:visible">
                                <MdModeEdit className="w-6 h-6 text-white" />
                            </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>
                                    Dados do perfil
                                </DialogTitle>
                                <div className="mt-5">
                                    <ModalProfileEditResume
                                        setOpen={setOpen}
                                        userProfile={userProfile}
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Button
                        type="button"
                        variant="outline"
                        className="text-gray-500"
                    >
                        <BiDotsHorizontal className="w-6 h-6" />
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        className="hidden lg:flex items-center gap-2 text-gray-500"
                    >
                        <TbMessageFilled className="w-6 h-6" />
                        <span className="text-base">
                            Mensagem
                        </span>
                    </Button>
                    <Button
                        type="button"
                        variant="default"
                        className="flex items-center gap-2 font-semibold text-white"
                    >
                        <AiOutlinePlus className="w-6 h-6" />
                        <span className="text-base">
                            Conectar
                        </span>
                    </Button>
                </div>
            </div>
            <div className="py-6 px-4 lg:px-0 border-b flex flex-col lg:flex-row justify-between gap-10">
                <div>
                    <h1 className="text-2xl font-bold">
                        {userProfile.name}
                    </h1>
                    {userProfile.description && (
                        <h2 className="text-sm font-semibold">
                            {userProfile.description}.
                        </h2>
                    )}
                    {userProfile.address && (
                        <p className="text-sm">
                            {userProfile.address}.
                        </p>
                    )}
                    <p>
                        <strong className="text-sm font-extrabold text-[#0A66C2]">
                            +2500 conexões
                        </strong>
                    </p>
                </div>
                <div className="flex flex-col">
                    {userProfile.education ? (
                        <div>

                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <Skeleton className="h-16 w-16 rounded-full" />
                            <div className="flex-1 space-y-2">
                                <Skeleton className="h-4 w-full lg:w-[350px]" />
                                <Skeleton className="h-4 w-[80%] lg:w-[300px]" />
                                <Skeleton className="h-4 w-[60%] lg:w-[250px]" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}