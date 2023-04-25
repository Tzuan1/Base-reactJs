import { createActions, createReducer } from "reduxsauce"
// create actions
const { Types, Creators } = createActions({
    setLayoutTitle: ["payload"],
    setListPosition: ["payload"],
    setListDepartment: ["payload"],
    listDepartmentSuccess: ["payload"],
    listPositionSuccess: ["payload"]
})

const INITIAL_STATE = {
    titlePage: ""
}
const INITIAL_DEPARTMENT_STATE = {
    listDepartment: [],
    ListPosition: []
}

export const layoutActionTypes: any = Types
export default Creators

const layoutTitleRequest = (state = INITIAL_STATE, { payload }: any) => {
    return {
        ...state,
        titlePage: payload
    }
}

export const layoutTitleReducer = createReducer(INITIAL_STATE, {
    [Types.SET_LAYOUT_TITLE]: layoutTitleRequest
})

const listDepartmentRequest = (
    state = INITIAL_DEPARTMENT_STATE,
    { payload }: any
) => {
    return {
        ...state,
        listDepartment: payload
    }
}

const listPositionRequest = (
    state = INITIAL_DEPARTMENT_STATE,
    { payload }: any
) => {
    return {
        ...state,
        ListPosition: payload
    }
}

const departmentSucccess = (
    state = INITIAL_DEPARTMENT_STATE,
    { payload }: any
) => {
    return {
        ...state,
        listDepartment: payload
    }
}

const positionSucccess = (
    state = INITIAL_DEPARTMENT_STATE,
    { payload }: any
) => {
    return {
        ...state,
        ListPosition: payload
    }
}

export const listDepartmentReducer = createReducer(INITIAL_DEPARTMENT_STATE, {
    [Types.SET_LIST_DEPARTMENT]: listDepartmentRequest,
    [Types.SET_LIST_POSITION]: listPositionRequest,
    [Types.LIST_DEPARTMENT_SUCCESS]: departmentSucccess,
    [Types.LIST_POSITION_SUCCESS]: positionSucccess
})
