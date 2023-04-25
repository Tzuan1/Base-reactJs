// import { regex } from "@/shared/regex"

import { IconType } from "antd/lib/notification"

type IStatusCode = {
    created: number
    bad_request: number
    error_server: number
    expired_token: number
    ok: number
    not_found: number
    not_accept: number
    method_not_allowed: number
}

type IKeyTypeScreen = {
    admin: string
    career: string
    adminFqa: string
    provider: string
    agency: string
}

type ITypeDataLogin = {
    type: string
    key: string
    title: string
    role: string
    status: number
}

type IKeyStorage = {
    profile: string
    assetToken: string
    typeScreen: string
    role: string
}

type ITypeInput = {
    checkbox: string
    date: string
    text: string
    image: string
    radio: string
    select: string
    textarea: string
    number: string
    password: string
    search: string
}

type ITypeNotification = {
    success: IconType
    error: IconType
    info: IconType
    warning: IconType
}

type ITypeScreenLogin = Array<ITypeDataLogin>[]

type ITabRegister = {
    id: string
    title: string
}

type ITypeListNavAdmin = {
    id: number
    title: string
    router: string
}

type IParamsTabRegister = {
    listTab: ITabRegister[]
    tabActive: string
    onChangeTabActive: Function
}

type ITypeValidForm = {
    name: string
    required?: boolean
    isRegex?: boolean
    regexValid?: RegExp
    isMaxlength?: boolean
    maxLength?: any
    funcMaxlength?: any
}

type ITypeRoleUser = {
    admin: string
    kousi: string
    seito: string
}

type ITypeListPopup = {
    popupCreateMessageContact: string
    popupClassReportDetail: string
}

type ITypePermissionRouteUser = {
    type: string
    homePage: string
}
type ITypeListMenuTopPage = {
    id: number
    href: string
    title: string
    icon: string
    iconActive: string
    isShow: string[]
}
type ITypeOptionMenuHeader = {
    href: string
    title: string
    isShow: string[]
    backgroundColor: string
}
export type {
    IStatusCode,
    IKeyStorage,
    ITypeInput,
    ITypeScreenLogin,
    ITypeDataLogin,
    ITypeNotification,
    ITabRegister,
    IParamsTabRegister,
    IKeyTypeScreen,
    ITypeValidForm,
    ITypeListNavAdmin,
    ITypeRoleUser,
    ITypePermissionRouteUser,
    ITypeListMenuTopPage,
    ITypeOptionMenuHeader,
    ITypeListPopup
}
