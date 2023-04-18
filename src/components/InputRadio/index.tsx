import { Radio } from "antd"
import React from "react"
import styles from "@/components/InputRadio/index.module.scss"

// types params input custom
type IPropsInput = {
    listDataRadio?: Object[]
    valChecked?: any
    name?: string
}

// input custom use all in project
const InputRadio = ({ listDataRadio, valChecked, name }: IPropsInput) => {
    return (
        <Radio.Group
            className={styles.inputRadioCustom}
            size="large"
            name={name}
            value={valChecked}
        >
            {listDataRadio &&
                listDataRadio.map((item: any, index) => (
                    <Radio key={index} value={item.value}>
                        {item.label}
                    </Radio>
                ))}
        </Radio.Group>
    )
}

export default InputRadio
