import React from "react"
import { Button, ButtonProps } from "antd"

interface ButtonCustomProps extends ButtonProps {
    text: string
}

const ButtonCustom = ({ text, ...rest }: ButtonCustomProps) => {
    return <Button {...rest}>{text}</Button>
}

export default ButtonCustom
