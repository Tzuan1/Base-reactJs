import { FormInstance, notification } from "antd"
import {
    IFunFormatData,
    IGetScreenDevice,
    INotification
} from "@/shared/function/IFuntions"
import { regex } from "@/shared/regex"
import { listKeyCodeNumber } from "../constants"
import { keyUserTab, statusWorkUser } from "@/modules/User/shared/constants"

const clearFormatMoney = (value: string) => {
    if (value) {
        return Number(value.replace(/\D/gi, ""))
    }
    return value
}

const debounce = (func: Function, delay: any) => {
    let debounceTimer: any
    return function () {
        // @ts-ignore
        const context = this
        const args = arguments
        clearTimeout(debounceTimer)
        debounceTimer = setTimeout(() => func.apply(context, args), delay)
    }
}

async function formatZipCode({ form, evt }: IFunFormatData) {
    const { target, keyCode, which } = evt
    const { name, value } = target
    evt = evt ? evt : window.event
    let charCode = which ? which : keyCode
    if (!listKeyCodeNumber.includes(charCode)) {
        evt.preventDefault()
        return
    }

    const valueTrim = value.trim().replace(/\D/gi, "")

    if (/^\D{7}$/.test(valueTrim)) {
        let match = valueTrim.match(/^(\d{3})(\d{4})$/)
        form.setFieldsValue({
            [name]: match[1] + "-" + match[2]
        })
        await form.validateFields([name]).catch(e => e.outOfDate)
    }
}

// format value form
const formatMobileNumber = async ({ form, evt }: IFunFormatData) => {
    const { target, keyCode, which } = evt
    const { name, value } = target
    evt = evt ? evt : window.event
    let charCode = which ? which : keyCode
    if (!listKeyCodeNumber.includes(charCode)) {
        evt.preventDefault()
        return
    }

    const valueTrim = value.trim().replace(/\D/gi, "")
    if (/^\D{11}$/.test(valueTrim)) {
        let match = valueTrim.match(/^(\d{3})(\d{4})(\d{4})$/)
        form.setFieldsValue({
            [name]: match[1] + "-" + match[2] + "-" + match[3]
        })
        await form.validateFields([name]).catch(e => e.outOfDate)
    }
}

// format value form
const formatLandlineNumber = async ({ form, evt }: IFunFormatData) => {
    const { target, keyCode, which } = evt
    const { name, value } = target
    evt = evt ? evt : window.event
    let charCode = which ? which : keyCode
    if (!listKeyCodeNumber.includes(charCode)) {
        evt.preventDefault()
        return
    }

    const valueTrim = value.trim().replace(/\D/gi, "")
    if (/^\D{10}$/.test(valueTrim)) {
        let match = valueTrim.match(/^(\d{2})(\d{4})(\d{4})$/)
        form.setFieldsValue({
            [name]: "(" + match[1] + ")-" + match[2] + "-" + match[3]
        })
        await form.validateFields([name]).catch(e => e.outOfDate)
    }
}

// format value form
// const formatMoneyJP = async ({form, name, value}: IFunFormatData) => {
const formatMoneyJP = async ({ form, evt }: any) => {
    const { target, keyCode, which } = evt
    const { name, value } = target
    evt = evt ? evt : window.event
    let charCode = which ? which : keyCode

    if (!listKeyCodeNumber.includes(charCode)) {
        evt.preventDefault()
        return
    }

    const cleaned = value.replace(/\D/gi, "")
    // @ts-ignore
    const moneyFormat: string = ("" + cleaned)
        .split("")
        .reverse()
        .join("")
        .match(/(\d{1,3})/g)
        .join(",")
        .split("")
        .reverse()
        .join("")
    form.setFieldsValue({
        [name]: moneyFormat
    })

    // @ts-ignore
    debounceMoneyJP({ form, name, value })
}

const formatStrMoneyJP = (moneyStr: string) => {
    const cleaned = moneyStr.replace(/\D/gi, "")
    // @ts-ignore
    const moneyFormat: string = ("" + cleaned)
        .split("")
        .reverse()
        .join("")
        .match(/(\d{1,3})/g)
        .join(",")
        .split("")
        .reverse()
        .join("")

    return moneyFormat
}

// format value number format character special agency form
const formatNumber = (formData: any) => {
    // clear format display number
    const listValueFormatNumber = ["landline_phone", "mobile_phone", "zip_code"]
    const listValueToNumber = [
        "accounting_charges",
        "inheritance_tax_fee",
        "subsidy_fee"
    ]
    for (let key in formData) {
        if (listValueFormatNumber.includes(key) && formData[key]) {
            formData[key] = formData[key].replace(/\D/gi, "")
        }
        if (listValueToNumber.includes(key) && formData[key]) {
            formData[key] = Number(formData[key].replace(/\D/gi, ""))
        }
    }
    return formData
}

// format value form trim debounce
const debounceLandlineNumberJP = debounce(
    async ({ form, name, value }: IFunFormatData) => {
        const valueTrim = value.trim()
        if (value) {
            form.setFieldsValue({
                [name]: valueTrim
            })
            await form.validateFields([name]).catch(e => e.outOfDate)
        }
    },
    500
)

// format value form trim debounce
const debounceMobileNumberJP = debounce(
    async ({ form, name, value }: IFunFormatData) => {
        const valueTrim = value.trim()
        if (value) {
            form.setFieldsValue({
                [name]: valueTrim
            })
            await form.validateFields([name]).catch(e => e.outOfDate)
        }
    },
    500
)

// format value form trim debounce
const debounceZipCodeJP = debounce(
    async ({ form, name, value }: IFunFormatData) => {
        const valueTrim = value.trim()
        if (value) {
            form.setFieldsValue({
                [name]: valueTrim
            })
            await form.validateFields([name]).catch(e => e.outOfDate)
        }
    },
    500
)

// format value form trim debounce
const debounceMoneyJP = debounce(
    async ({ form, name, value }: IFunFormatData) => {
        const valueTrim = value.trim()
        if (value) {
            const cleaned = valueTrim.replace(/\D/gi, "")
            // @ts-ignore
            const moneyFormat: string = ("" + cleaned)
                .split("")
                .reverse()
                .join("")
                .match(/(\d{1,3})/g)
                .join(",")
                .split("")
                .reverse()
                .join("")
            form.setFieldsValue({
                [name]: moneyFormat + "円"
            })
            await form.validateFields([name]).catch(e => e.outOfDate)
        }
    },
    1000
)

const autoTrimDebounceInput = debounce(
    async ({ formInstance, name, value }: any) => {
        if (value && regex.space_full.test(value) && formInstance) {
            formInstance.setFieldsValue({
                [name]: value.trim()
            })
            return
        }

        if (value && regex.space_top_or_end.test(value) && formInstance) {
            formInstance.setFieldsValue({
                [name]: value.trim()
            })
            await formInstance
                .validateFields([name])
                .catch((e: any) => e.outOfDate)
        }
    },
    1000
)

const isArray = (value: any): boolean => {
    return value && Array.isArray(value) && value.length > 0
}

const isObject = (value: any): boolean => {
    return typeof value === "object" && Object.keys(value).length > 0
}

const NotificationCustom = ({ type, message }: INotification) => {
    notification[type]({
        message: message,
        duration: 2,
        placement: "topRight"
    })
}

const validFormInit = (listFormInstants: FormInstance[], timeOut: number) => {
    setTimeout(() => {
        listFormInstants.forEach(async itemForm => {
            const objDataForm = itemForm.getFieldsValue()
            const listItemValid = Object.keys(objDataForm).filter(
                key => objDataForm[key]
            )
            if (isArray(listItemValid)) {
                await itemForm
                    .validateFields(listItemValid)
                    .then(res => res)
                    .catch(err => err)
            }
        })
    }, timeOut)
}

const preventKeyLandLinePhone = (e: any) => {
    const { target, key } = e
    if (!/\d/.test(key) || target.value.replace(/\D/gi, "").length > 9) {
        e.preventDefault()
        return
    }
}

const preventKeyMobilePhone = (e: any) => {
    const { target, key } = e
    if (!/\d/.test(key) || target.value.replace(/\D/gi, "").length > 10) {
        e.preventDefault()
        return
    }
}

const preventKeyZipcode = (e: any) => {
    const { target, key } = e
    if (!/\d/.test(key) || target.value.replace(/\D/gi, "").length > 6) {
        e.preventDefault()
        return
    }
}

const preventKeyMoneyJP = (e: any) => {
    const { target, key } = e
    if (!/\d/.test(key) || target.value.replace(/\D/gi, "").length > 7) {
        e.preventDefault()
        return
    }
}
const checkMaxlengthText = (value: any, length: number): boolean => {
    return value.toString().length <= length
}

const calPercent = (ended: number, total: number): number => {
    return Number(((ended / total) * 100).toFixed(3))
}

function getWidthHeightDevice(): IGetScreenDevice {
    return {
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
    }
}

function deviceResponsiveIOS() {
    return (
        [
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod"
        ].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    )
}

function compareValueObject({ object1, object2 }) {
    if (!Object.keys(object1).length) {
        return true
    }
    let isCompare = true
    for (let key in object1) {
        if (object1[key] !== object2[key]) {
            isCompare = false
            break
        }
    }
    return isCompare
}

function objectHasKey(objCheck: any, keyCheck: any): boolean {
    return (
        objCheck &&
        typeof objCheck === "object" &&
        Object.keys(objCheck).includes(keyCheck)
    )
}

const getQueryLocation = (key: string) => {
    const searchParams = new URLSearchParams(window.location.search)
    return searchParams.get(key)
}

const checkLevelUser = (id: number) => {
    switch (id) {
        case 1:
            return "Intern"
        case 2:
            return "Fresher"
        case 3:
            return "Middle"
        case 4:
            return "Middle"
        case 5:
            return "Senior"
        default:
            return "Intern"
    }
}

const checkStatusUser = (status: number) => {
    switch (status) {
        case statusWorkUser.Onboarding: {
            return keyUserTab.Onboarding
        }
        case statusWorkUser.Waiting: {
            return keyUserTab.Waiting
        }
        case statusWorkUser.Retired: {
            return keyUserTab.Retired
        }
        default:
            return ""
    }
}

const getColorStatus = (status: string) => {
    let color = "success"
    switch (status) {
        case "Onboarding": {
            color = "success"
            return color
        }
        case "Waiting": {
            color = "yellow"
            return color
        }
        case "Retired": {
            color = "red"
            return color
        }
        default: {
            color = "success"
            return color
        }
    }
}

export {
    autoTrimDebounceInput,
    clearFormatMoney,
    checkMaxlengthText,
    calPercent,
    compareValueObject,
    debounce,
    debounceMoneyJP,
    debounceLandlineNumberJP,
    debounceMobileNumberJP,
    debounceZipCodeJP,
    deviceResponsiveIOS,
    formatMobileNumber,
    formatLandlineNumber,
    formatZipCode,
    formatMoneyJP,
    formatNumber,
    formatStrMoneyJP,
    getWidthHeightDevice,
    NotificationCustom,
    isArray,
    isObject,
    validFormInit,
    preventKeyMoneyJP,
    preventKeyLandLinePhone,
    preventKeyMobilePhone,
    preventKeyZipcode,
    objectHasKey,
    getQueryLocation,
    checkLevelUser,
    checkStatusUser,
    getColorStatus
}
