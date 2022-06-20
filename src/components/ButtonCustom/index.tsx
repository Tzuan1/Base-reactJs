import React from "react"

type IButtonCustom = {
    title?: any
    color?: string
    colorButton: string
    onActions: any
    disabled?: boolean
    classCustom?: string
    icon?: any
    heightIcon?: string
    widthIcon?: string
}

const ButtonCustom = ({
    title,
    color = "#fff",
    colorButton,
    classCustom,
    disabled,
    onActions,
    icon,
    widthIcon,
    heightIcon
}: IButtonCustom) => {
    return (
        <button
            type="button"
            style={{
                color: color,
                background: colorButton
            }}
            className={`${classCustom} ${disabled ? "buttonDisabled" : ""}`}
            onClick={onActions}
            disabled={disabled}
        >
            <p className="mb-0">
                {icon && (
                    <img
                        src={icon}
                        alt="React Logo"
                        style={{
                            height: heightIcon,
                            width: widthIcon
                        }}
                    />
                )}
                {title && <span>{title}</span>}
            </p>
        </button>
    )
}

export default ButtonCustom
