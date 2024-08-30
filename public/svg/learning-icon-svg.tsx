"use client"

interface LearningIconSvgProps {
    width: string
    height: string
    className: string
}

export const LearningIconSvg = ({ width, height, className }: LearningIconSvgProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-busy="false"
            fill="none"
            width={width}
            height={height}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23 3H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2 19h20V5H2v14Z"
                fill="currentColor"
                className={className}
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 9h6V7H4v2Zm0 4h6v-2H4v2Zm0 4h6v-2H4v2Zm-2 2h10V5H2v14Z"
                fill="currentColor"
                className={className}
                fillOpacity=".25"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 9h6V7h-6v2Zm0 4h6v-2h-6v2Zm6 4h-6v-2h6v2Z"
                fill="currentColor"
                className={className}
                fillOpacity=".6"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 7.534v8.933a.28.28 0 0 0 .439.23l6.433-4.436A.307.307 0 0 0 17 12a.305.305 0 0 0-.128-.26l-6.433-4.437a.28.28 0 0 0-.439.23Z"
                fill="currentColor"
                className={className}
            />
        </svg>
    )
}