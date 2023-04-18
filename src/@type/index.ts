import { ComponentType, FunctionComponent } from "react"

type IRouter = {
    exact: boolean
    path: string
    component: ComponentType
    layout?: FunctionComponent
    title?: string
    isAuth?: boolean
    role?: string[]
    width?: string
    name?: string
}

type IResponeApi = {
    config: any
    data: any
    headers: any
    request: any
    status: number
    statusText: string
}

type ITypeParamsSelectCustom = {
    options: any[]
    onAction: any
    valueInit?: any
    valueSelect?: any
    suffixIcon?: any
    defaultValue?: any
    fieldNames?: any
}

export type { IRouter, IResponeApi, ITypeParamsSelectCustom }
