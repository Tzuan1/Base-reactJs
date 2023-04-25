import { createActions, createReducer } from "reduxsauce"
// create actions
const { Types, Creators } = createActions({
    showPopup: ["payload"],
    hiddenPopup: []
})

export const popupTypes: any = Types
export default Creators

const INITIAL_STATE: any = {
    isShow: false,
    params: null,
    typePopup: null
}

const showPopupRequest = (state = INITIAL_STATE, { payload }: any) => {
    return {
        ...state,
        isShow: true,
        typePopup: payload.typePopup,
        params: {
            ...state.params,
            ...payload.params
        }
    }
}

const hiddenPopupRequest = (state = INITIAL_STATE) => {
    return {
        isShow: false,
        params: null,
        typePopup: null
    }
}

export const popupReducer = createReducer(INITIAL_STATE, {
    [Types.SHOW_POPUP]: showPopupRequest,
    [Types.HIDDEN_POPUP]: hiddenPopupRequest
})
