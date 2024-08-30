"use client"

interface LinkedinPremiumIconSvgProps {
    width: string
    height: string
}

export const LinkedinPremiumIconSvg = ({ width, height }: LinkedinPremiumIconSvgProps) => {
    return (
        <svg
            role="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-supported-dps="24x24"
            width={width}
            height={height}
        >
            <use href="#premium-chip-medium" width="24" height="24" />
        </svg>
    )
}