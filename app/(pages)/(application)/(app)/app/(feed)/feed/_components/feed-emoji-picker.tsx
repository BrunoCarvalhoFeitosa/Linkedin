"use client"
import Picker from "@emoji-mart/react"
import data from "@emoji-mart/data"
import { useTheme } from "next-themes"
import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover"
import { LuSmile } from "react-icons/lu"

interface FeedEmojiPickerProps {
    onChange: (value: string) => void
}

export const FeedEmojiPicker = ({ onChange }: FeedEmojiPickerProps) => {
    const { resolvedTheme } = useTheme()

    return (
        <Popover>
            <PopoverTrigger>
                <LuSmile className="w-6 h-6 text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition" />
            </PopoverTrigger>
            <PopoverContent
                side="right"
                sideOffset={40}
                className="bg-transparent border-none shadow-none drop-shadow-none mb-16"
            >
                <Picker
                    theme={resolvedTheme}
                    data={data}
                    onEmojiSelect={(emoji: any) => onChange(emoji.native)}
                />
            </PopoverContent>
        </Popover>
    )
}