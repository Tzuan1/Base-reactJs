import { put } from "redux-saga/effects"
import Creators from "../reduces"

function* setTextSaga(action) {
    yield put(Creators.setLayoutTitle(action.text))
}

export default setTextSaga
