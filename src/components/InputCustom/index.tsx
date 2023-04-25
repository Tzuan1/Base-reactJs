import { DatePicker, FormInstance, Input, Radio, Select } from "antd"
import Form from "antd/lib/form"
import React from "react"
import styles from "@/components/InputCustom/index.module.scss"
import stylesInputRadio from "@/components/InputRadio/index.module.scss"
import { typeInputCustom } from "@/shared/constants"
import TextArea from "antd/lib/input/TextArea"
import moment from "moment-timezone"
import { autoTrimDebounceInput } from "@/shared/function"
// import { debounce } from "@/shared/function"

const { Option } = Select

// types params input custom
type IPropsInput = {
    classCustomLabel?: string
    classCustomInput?: string
    classNameFormItem?: string
    disabled?: boolean
    errSizeImage?: string
    formatValue?: any
    formatDebounce?: any
    form?: FormInstance
    onKeyPress?: Function
    isKeyPress?: boolean
    isDebounce?: boolean
    title?: string
    typeInput?: string
    listDataRadio?: Object[]
    listDataSelect?: Object[]
    listNameImage?: any[]
    valChecked?: any
    valSelect?: any
    name?: string
    maxSizeImage?: number
    valueInput?: any
    placeholder?: string
    prefix?: string
    rules?: any[]
    required?: boolean
    suffix?: string
    handleOnChange?: (value: any) => void
    onChangeRadio?: (value: any) => void
    refPass?: any
}
// input custom use all in project
const InputCustom = ({
    classCustomLabel,
    classCustomInput,
    classNameFormItem,
    disabled,
    title,
    typeInput,
    name,
    listDataRadio,
    listDataSelect,
    valChecked,
    valSelect,
    placeholder,
    rules,
    required,
    prefix,
    suffix,
    formatValue,
    formatDebounce,
    form,
    valueInput,
    onKeyPress,
    handleOnChange,
    onChangeRadio,
    refPass
}: IPropsInput) => {
    // list css custom label
    const listClassInput = () => {
        let listCss = styles.inputCustom

        if (
            typeInput === typeInputCustom.image ||
            typeInput === typeInputCustom.textarea
        ) {
            listCss += " " + styles.inputCustomImage
        }

        if (classCustomLabel) {
            listCss += " " + classCustomLabel
        }
        return listCss
    }

    // const onBlur = (e: any) => {
    //     const { name, value } = e.target
    //     if (isFormat) {
    //         return
    //     }
    //     if (name && form) {
    //         form.setFieldsValue({
    //             [name]: value.trim()
    //         })
    //         form.isFieldValidating(name)
    //     }
    // }

    // const trimDebounce = debounce(async ({ form, name, value }: any) => {
    //     if (value) {
    //         const cleaned = value.trim().replace(/[^0-9]/gi, "")
    //         // @ts-ignore
    //         const moneyFormat = ("" + cleaned)
    //             .split("")
    //             .reverse()
    //             .join("")
    //             .match(/(\d{1,3})/g)
    //             .join(",")
    //             .split("")
    //             .reverse()
    //             .join("")
    //
    //         form.setFieldsValue({
    //             [name]: moneyFormat + "円"
    //         })
    //
    //         await form.validateFields([name]).catch((e: any) => e.outOfDate)
    //     }
    // }, 500)

    const onKeyUp = async (evt: any) => {
        const { name, value } = evt.target

        if (formatValue) {
            formatValue(evt)
            return
        }
        // @ts-ignore
        await autoTrimDebounceInput({ formInstance: form, name, value })
    }

    function disabledDate(current: any) {
        return current && current <= moment().subtract(1, "day")
    }

    const renderTypeInput = () => {
        switch (typeInput) {
            case typeInputCustom.date:
                const dateFormat = "YYYY/MM/DD"
                const customFormat = (value: any) =>
                    `${value.format(dateFormat)}`
                return (
                    <DatePicker
                        disabledDate={disabledDate}
                        format={customFormat}
                    />
                )
            case typeInputCustom.textarea:
                return (
                    <TextArea
                        value={valueInput}
                        rows={4}
                        disabled={disabled}
                        placeholder={placeholder}
                        onChange={handleOnChange}
                        // onBlur={onBlur}
                    />
                )
            case typeInputCustom.radio:
                return (
                    <Radio.Group
                        className={stylesInputRadio.inputRadioCustom}
                        size="large"
                        name={name}
                        value={valChecked}
                        onChange={onChangeRadio}
                    >
                        {listDataRadio &&
                            listDataRadio.map((item: any, index) => (
                                <Radio key={index} value={item.value}>
                                    {item.label}
                                </Radio>
                            ))}
                    </Radio.Group>
                )
            case typeInputCustom.select:
                return (
                    <Select
                        defaultValue={valSelect}
                        className={classCustomInput}
                        disabled={disabled}
                    >
                        {listDataSelect &&
                            listDataSelect.map((item: any, index) => (
                                <Option key={index} value={item.value}>
                                    {item.label}
                                </Option>
                            ))}
                    </Select>
                )
            case typeInputCustom.password:
                return (
                    <Input
                        placeholder={placeholder}
                        disabled={disabled}
                        className={classCustomInput}
                        prefix={prefix}
                        suffix={suffix}
                        name={name}
                        type="password"
                        value={valueInput}
                        onKeyUp={onKeyUp}
                        onKeyPress={e => {
                            if (onKeyPress) {
                                onKeyPress(e)
                            }
                        }}
                    />
                )
            default:
                return (
                    <Input
                        placeholder={placeholder}
                        disabled={disabled}
                        className={classCustomInput}
                        prefix={prefix}
                        suffix={suffix}
                        name={name}
                        value={valueInput}
                        onKeyUp={onKeyUp}
                        onKeyPress={e => {
                            if (onKeyPress) {
                                onKeyPress(e)
                            }
                        }}
                        ref={refPass ? refPass : null}
                    />
                )
        }
    }

    const fillId = `starGrad${Math.random().toFixed(15).slice(2)}`
    return (
        <Form.Item
            label={
                <div>
                    <span className="input-title">{title}</span>
                    <span className={styles.required}>
                        {required ? "（必須）" : ""}
                    </span>
                </div>
            }
            name={name}
            rules={rules}
            className={`${listClassInput()} ${classNameFormItem}`}
            colon={false}
            labelAlign={"left"}
            required={required}
            htmlFor=""
            id={fillId}
            // validateTrigger={["onBlur", "onChange"]}
            validateStatus=""
        >
            {renderTypeInput()}
        </Form.Item>
    )
}

export default InputCustom
