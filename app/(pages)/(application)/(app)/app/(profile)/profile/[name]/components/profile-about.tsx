"use client"
import { useState } from "react"
import { User } from "@prisma/client"
import { Skeleton } from "@/app/components/ui/skeleton"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/app/components/ui/dialog"
import { ModalProfileEditAbout } from "@/app/components/application/modals/modal-profile-edit-about"
import { MdModeEdit } from "react-icons/md"

interface ProfileAboutProps {
    userProfile: User
}

export const ProfileAbout = ({ userProfile }: ProfileAboutProps) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <section className="group px-4 lg:px-12">
            <div className="py-10 border-b">
                <div className="mb-6 flex items-center gap-4">
                    <div>
                        <h3 className="text-xl font-bold">
                            Sobre
                        </h3>
                    </div>
                    <div>
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger className="flex justify-center items-center w-12 h-12 lg:opacity-0 lg:invisible rounded-full bg-[#0A66C2] shadow-xl group-hover:opacity-100 group-hover:visible">
                                <MdModeEdit className="w-6 h-6 text-white" />
                            </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>
                                    Sobre
                                </DialogTitle>
                                <div className="mt-5">
                                    <ModalProfileEditAbout
                                        setOpen={setOpen}
                                        userProfile={userProfile}
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                {userProfile.about ? (
                    <div className="w-full">
                        <p className="text-sm">
                            {userProfile.about}
                        </p>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <Skeleton className="w-full lg:w-96 h-4" />
                        <Skeleton className="w-full lg:w-80 h-4" />
                        <Skeleton className="w-full lg:w-64 h-4" />
                    </div>
                )}
            </div>
        </section>
    )
}