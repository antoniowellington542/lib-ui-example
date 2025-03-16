import React from "react"

export interface HeaderPropsType {
    title: string
}

export const Header = ({
    title,
    ...props
}: HeaderPropsType) => {
    return (
        <div
            style={{
                height: "50px",
                width: "200px"
            }}
            {...props}
        >
            <button
                type="button"
            >
                {title}
            </button>
        </div>
    )
}