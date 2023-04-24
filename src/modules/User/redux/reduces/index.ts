import { createActions, createReducer } from "reduxsauce"
import { copyDeep } from "@/shared"
import { IInitialUserReducer } from "../../shared/typings/user-type"
import { InitialUser } from "../../shared/constants"
// create actions
const { Types, Creators } = createActions({
    getListUser: ["payload"],
    listUserSuccess: ["payload"],
    listUserError: ["payload"],
    getListCount: [],
    createUser: ["payload"]
})

export const listUserTypes: any = Types
export default Creators

const INITIAL_STATE: IInitialUserReducer = copyDeep(InitialUser)

const listUserRequest = (state = INITIAL_STATE, { payload }: any) => {
    return {
        ...state,
        ...payload
    }
}

const listUserSuccess = (state = INITIAL_STATE, { payload }: any) => {
    return {
        ...state,
        isLoading: false,
        ...payload
    }
}

const listUserError = (state = INITIAL_STATE, { payload }: any) => {
    return {
        ...state,
        isLoading: false,
        ...payload
    }
}

const listCountRequest = (state = INITIAL_STATE) => {
    return state
}

const postUserRequest = (state = INITIAL_STATE) => {
    return state
}
// const clearDataStore = () => {
//     return copyDeep(InitialUser)
// }

export const listUserReducer = createReducer(INITIAL_STATE, {
    [Types.LIST_USER_ERROR]: listUserError,
    [Types.LIST_USER_SUCCESS]: listUserSuccess,
    [Types.GET_LIST_USER]: listUserRequest,
    [Types.GET_LIST_COUNT]: listCountRequest,
    [Types.CREATE_USER]: postUserRequest

    // [Types.CLEAR_DATA_STORE]: clearDataStore
})
