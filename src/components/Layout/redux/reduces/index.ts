import { createActions, createReducer } from "reduxsauce"
// create actions
const { Types, Creators } = createActions({
    setLayoutTitle: ["payload"]
})

const INITIAL_STATE = {
    currentText: "Dash board"
}

export const layoutTypes: any = Types
export default Creators

const layoutTitleRequest = (state = INITIAL_STATE, { payload }: any) => {
    return {
        ...state,
        currentText: payload
    }
}

export const layoutTitleReducer = createReducer(INITIAL_STATE, {
    [Types.SET_LAYOUT_TITLE]: layoutTitleRequest
})
