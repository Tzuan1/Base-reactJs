import React from "react"
import { Select } from "antd"
import { ITypeParamsSelectCustom } from "@/modules/Tuition/shared/typings/tuition-type"

const SelectCustom = ({
    options,
    onChange,
    valueInit,
    placeholder,
    ...res
}: ITypeParamsSelectCustom) => {
    return (
        <Select
            {...res}
            value={valueInit}
            options={options}
            showArrow={true}
            style={{ minWidth: "10%" }}
            onChange={onChange}
            placeholder={placeholder}
        ></Select>
    )
}

export default SelectCustom
