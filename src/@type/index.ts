type IRouter = {
    exact: boolean
    path: string
    component: JSX.Element
    title?: string
    isAuth?: boolean
    role?: string[]
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
