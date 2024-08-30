"use client"
import { FeedPostForm } from "./feed-post-form"
import { User } from "@prisma/client"

interface FeedProps {
    currentUser: User
}

export const Feed = ({ currentUser }: FeedProps) => {
    return (
        <div className="p-4 flex-1 border">
            <FeedPostForm currentUser={currentUser} />
        </div>
    )
}