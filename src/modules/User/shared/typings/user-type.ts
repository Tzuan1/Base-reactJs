type ITypeParamsGetListUser = {
    status?: number
    pageIndex?: number
}

type IInitialUserReducer = {
    isLoading: boolean
    listUser: {}
    newUser: {}
    countActiveUser: number
    countWaitUser: number
    countAllUser: number
    countOffUser: number
}

type IStatusWorkUser = {
    All: number
    Onboarding: number
    Waiting: number
    Retired: number
}

type IsKeyUserTabs = {
    Dashboard: string
    All: string
    Onboarding: string
    Waiting: string
    Retired: string
}

type IsNumberId = {
    id1: number
    id2: number
    id3: number
    id4: number
    id5: number
    id6: number
    id7: number
    id8: number
    id9: number
    id10: number
}

export type {
    ITypeParamsGetListUser,
    IInitialUserReducer,
    IStatusWorkUser,
    IsKeyUserTabs,
    IsNumberId
}
