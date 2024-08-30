"use client"

interface HeaderTitleProps {
    title: string
}

export const HeaderTitle = ({ title }: HeaderTitleProps) => {
    return (
        <div className="py-16 px-4 lg:px-12 w-full bg-gray-50 dark:bg-[#111]">
            <h1 className="text-4xl font-semibold">
                {title}
            </h1>
        </div>
    )
}