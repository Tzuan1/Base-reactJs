import React from "react"

// antd ui
import { DatePicker, DatePickerProps } from "antd"

const DatePickerCustom = ({ ...props }: DatePickerProps) => {
    return <DatePicker {...props} />
}

export default React.memo(DatePickerCustom)
