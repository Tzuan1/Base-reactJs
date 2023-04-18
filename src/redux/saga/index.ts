import { all } from "redux-saga/effects"
import { tuitionSaga } from "@/modules/Tuition/redux/saga"

export default function* rootSaga() {
    // @ts-ignore
    yield all([...tuitionSaga])
}
