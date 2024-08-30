"use client"
import { useTheme } from "next-themes"
import { Button } from "@/app/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/app/components/ui/dropdown-menu"
import { MdLightbulb, MdLightbulbOutline } from "react-icons/md"

export const ToggleTheme = () => {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="default"
                    className="group px-3 lg:px-5 h-9 lg:h-12 rounded-full border-[#0A66C2] hover:bg-[#0A66C2] outline-none"
                >
                    <MdLightbulbOutline className="w-6 h-6 text-[#0A66C2] group-hover:text-white rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MdLightbulb className="absolute w-6 h-6 text-[#0A66C2] group-hover:text-white rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Tema claro
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Tema escuro
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}