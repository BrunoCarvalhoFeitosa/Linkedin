"use client"
import { cn } from "@/lib/utils"

interface BentoGridProps {
    className?: string
    children?: React.ReactNode
}

interface BentoGridItemProps {
    className?: string
    title?: string | React.ReactNode
    description?: string | React.ReactNode
    header?: React.ReactNode
    icon?: React.ReactNode
}

export const BentoGrid = ({ className, children }: BentoGridProps) => {
    return (
        <div
            className={cn(
                "w-full grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                className
            )}
        >
            {children}
        </div>
    )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: BentoGridItemProps) => {
    return (
        <div
            className={cn(
                "py-6 px-8 rounded-xl group/bento hover:shadow-md transition duration-200 border border-zinc-200 shadow-input dark:shadow-none dark:bg-[#0E0E0E] dark:hover:bg-[#151515] dark:border-none bg-white justify-between flex flex-col space-y-4",
                className
            )}
        >
            {header}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <div className="font-bold dark:text-neutral-200 mt-2 lg:mb-2">
                    {title}
                </div>
                <div className="font-normal text-xs dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    )
}