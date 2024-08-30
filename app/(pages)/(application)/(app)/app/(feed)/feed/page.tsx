import { UserSideProfileCard } from "@/app/components/application/user-side-profile-card"
import { Feed } from "@/app/(pages)/(application)/(app)/app/(feed)/feed/_components/feed"
import getCurrentUser from "@/app/actions/getCurrentUser"

const FeedPage = async () => {
    const currentUser = await getCurrentUser()

    return (
        <main>
            <div className="mt-14 lg:mt-0 lg:pt-0 py-8 px-4 lg:px-12 flex flex-col lg:flex-row gap-8">
                <UserSideProfileCard currentUser={currentUser} />
                <Feed currentUser={currentUser} />
            </div>
        </main>
    )
}

export default FeedPage