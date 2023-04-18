import { takeLatest } from "redux-saga/effects"
import { layoutTypes } from "../reduces"
import setTextSaga from "../request"

export const layoutTitleRequestSaga = () => {
    takeLatest(layoutTypes.SET_LAYOUT_TITLE, setTextSaga)
}
