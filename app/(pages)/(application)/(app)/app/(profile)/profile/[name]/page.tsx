import { notFound } from "next/navigation"
import { reformatName } from "@/utils/formatters"
import getUserProfile from "@/app/actions/getUserProfile"
import { ProfileBackgroundCover } from "@/app/(pages)/(application)/(app)/app/(profile)/profile/[name]/components/profile-background-cover"
import { ProfileResume } from "@/app/(pages)/(application)/(app)/app/(profile)/profile/[name]/components/profile-resume"
import { ProfileAbout } from "@/app/(pages)/(application)/(app)/app/(profile)/profile/[name]/components/profile-about"
import { ProfileExperience } from "@/app/(pages)/(application)/(app)/app/(profile)/profile/[name]/components/profile-experience"
import { ProfileSchool } from "@/app/(pages)/(application)/(app)/app/(profile)/profile/[name]/components/profile-school"
import { ProfileCertificates } from "@/app/(pages)/(application)/(app)/app/(profile)/profile/[name]/components/profile-certificates"

interface UserProfilePageProps {
    params: {
        name: string
    }
}

const UserProfilePage = async ({ params }: UserProfilePageProps) => {
    const { name } = params
    const userProfile = await getUserProfile(reformatName(name))

    if (!userProfile) {
        notFound()
    }

    return (
        <main>
            <div className="mt-10 lg:mt-0 lg:pt-0 py-8 px-0 flex flex-col">
                <ProfileBackgroundCover userProfile={userProfile} />
                <ProfileResume userProfile={userProfile} />
                <ProfileAbout userProfile={userProfile} />
                <ProfileExperience userProfile={userProfile} />
                <ProfileSchool userProfile={userProfile} />
                <ProfileCertificates userProfile={userProfile} />
            </div>
        </main>
    )
}

export default UserProfilePage