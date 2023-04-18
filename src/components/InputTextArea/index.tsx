import React from "react"
import { Input } from "antd"

const { TextArea } = Input

// types params input custom
type IPropsInput = {
    classCustomLabel?: string
    classCustomInput?: string
    disabled?: boolean
    title?: string
    typeInput?: string
    name?: string
    placeholder?: string
    rules?: [any]
    required?: boolean
}

// input custom use all in project
const InputTextArea = ({ classCustomLabel }: IPropsInput) => {
    return <TextArea rows={4} />
}

export default InputTextArea
