import { all } from "redux-saga/effects"
import { tuitionSaga } from "@/modules/Tuition/redux/saga"
import { layoutTitleRequestSaga } from "@/components/Layout/redux/saga"

export default function* rootSaga() {
    // @ts-ignore
    yield all([...tuitionSaga])
    yield all([layoutTitleRequestSaga])
}
