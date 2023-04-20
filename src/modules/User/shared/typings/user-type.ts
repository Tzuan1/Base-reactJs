type ITypeParamsGetListUser = {
    status?: number
    pageIndex?: number
}

type IInitialUserReducer = {
    isLoading: boolean
    listUser: {}
}

type IStatusWorkUser = {
    All: number
    Onboarding: number
    Waiting: number
    Retired: number
}

type IskeyUserTabs = {
    Dashboard: string
    All: string
    Onboarding: string
    Waiting: string
    Retired: string
}
export type {
    ITypeParamsGetListUser,
    IInitialUserReducer,
    IStatusWorkUser,
    IskeyUserTabs
}
