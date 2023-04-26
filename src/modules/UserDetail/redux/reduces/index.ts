import { createActions, createReducer } from "reduxsauce"
import { copyDeep } from "@/shared"
import { IInitialUserDetailReducer } from "../../shared/typings/userDetail-type"
import { IInitialUserDetail } from "../../shared/constants"
// create actions
const { Types, Creators } = createActions({
    userDetailSuccess: ["payload"],
    userDetailError: ["payload"],
    getUserDetail: ["payload"],
    changePassword: ["payload"],
    editUser: ["payload"]
})

export const userDetailTypes: any = Types
export default Creators

const INITIAL_STATE: IInitialUserDetailReducer = copyDeep(IInitialUserDetail)

const userDetailRequest = (state = INITIAL_STATE, { payload }: any) => {
    return {
        ...state,
        isLoading: true,
        ...payload
    }
}

const userDetailSuccess = (state = INITIAL_STATE, { payload }: any) => {
    return {
        ...state,
        isLoading: false,
        ...payload
    }
}

const userDetailError = (state = INITIAL_STATE, { payload }: any) => {
    return {
        ...state,
        isLoading: false,
        ...payload
    }
}

const postPasswordRequest = (state = INITIAL_STATE) => {
    return state
}

const putEditUserRequest = (state = INITIAL_STATE) => {
    return state
}

export const userDetailReducer = createReducer(INITIAL_STATE, {
    [Types.USER_DETAIL_ERROR]: userDetailError,
    [Types.USER_DETAIL_SUCCESS]: userDetailSuccess,
    [Types.GET_USER_DETAIL]: userDetailRequest,
    [Types.CHANGE_PASSWORD]: postPasswordRequest,
    [Types.EDIT_USER]: putEditUserRequest
})
