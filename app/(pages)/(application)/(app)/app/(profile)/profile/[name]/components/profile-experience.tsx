"use client"
import { useState } from "react"
import Image from "next/image"
import { Skeleton } from "@/app/components/ui/skeleton"
import { User } from "@/types"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/app/components/ui/dialog"
import { ModalProfileEditExperience } from "@/app/components/application/modals/modal-profile-edit-experience"
import { MdModeEdit } from "react-icons/md"

interface ProfileExperienceProps {
    userProfile: User
}

export const ProfileExperience = ({ userProfile }: ProfileExperienceProps) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <section className="group px-4 lg:px-12">
            <div className="py-10 border-b">
                <div className="mb-6 flex items-center gap-4">
                    <div>
                        <h3 className="text-xl font-bold">Experiência</h3>
                    </div>
                    <div>
                        <Dialog open={open} onOpenChange={setOpen}>
                            <DialogTrigger className="flex justify-center items-center w-12 h-12 lg:opacity-0 lg:invisible rounded-full bg-[#0A66C2] shadow-xl group-hover:opacity-100 group-hover:visible">
                                <MdModeEdit className="w-6 h-6 text-white" />
                            </DialogTrigger>
                            <DialogContent>
                                <DialogTitle>Experiência</DialogTitle>
                                <div className="mt-5">
                                    <ModalProfileEditExperience
                                        setOpen={setOpen}
                                        userProfile={userProfile}
                                    />
                                </div>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
                {userProfile.experience && userProfile.experience.length > 0 ? (
                    <div className="w-full flex flex-col gap-5">
                        {userProfile.experience.map((exp, index) => (
                            <div key={index} className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-14 flex justify-center">
                                        <Image
                                            src={exp.companyLogo}
                                            width={48}
                                            height={48}
                                            alt={`Logo da empresa ${exp.companyName}`}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-lg leading-none font-semibold">
                                            {exp.companyName}
                                        </h4>
                                        <p className="text-sm">
                                            {exp.jobYearsWorked}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="w-14 flex justify-center">
                                        <div className="relative w-[1px] h-full bg-gray-300 after:block after:absolute after:top-0 after:left-2/4 after:-translate-x-2/4 after:w-3 after:h-3 after:rounded-full after:bg-gray-300" />
                                    </div>
                                    <div className="flex flex-col">
                                        <div>
                                            <h4 className="text-lg font-semibold">
                                                {exp.jobTitle}
                                            </h4>
                                            <p className="text-sm">
                                                {exp.jobHiringModel}
                                            </p>
                                            <p className="text-sm">
                                                {exp.jobRegion}
                                            </p>
                                        </div>
                                        <div className="mt-5">
                                            <p className="text-sm">
                                                {exp.jobDescription}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
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
