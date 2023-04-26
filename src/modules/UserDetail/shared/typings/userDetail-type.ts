type IInitialUserDetailReducer = {
    dataUser: {}
}

type ITypeParamsGetUser = {
    userId?: number
}

type ITypeParamsPassword = {
    userId?: number
    password?: string
    confirm_password?: string
}

export type {
    IInitialUserDetailReducer,
    ITypeParamsGetUser,
    ITypeParamsPassword
}
