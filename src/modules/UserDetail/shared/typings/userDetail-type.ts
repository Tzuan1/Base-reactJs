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

type ITypeParamsEditUser = {
    userId?: number
    params?: {}
}

export type {
    IInitialUserDetailReducer,
    ITypeParamsGetUser,
    ITypeParamsPassword,
    ITypeParamsEditUser
}
