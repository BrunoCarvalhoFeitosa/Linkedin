"use client"

interface HomeIconSvgProps {
    width: string
    height: string
    className: string
}

export const HomeIconSvg = ({ width, height, className }: HomeIconSvgProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            width={width}
            height={height}
            focusable="false"
            className={className}
        >
            <path
                d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"
            />
        </svg>
    )
}