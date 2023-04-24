import { all } from "redux-saga/effects"
import { tuitionSaga } from "@/modules/Tuition/redux/saga"
import { userSaga } from "@/modules/User/redux/saga"
import { departmentAndPositionSaga } from "@/components/Layout/redux/saga"

export default function* rootSaga() {
    // @ts-ignore
    yield all([...tuitionSaga, ...userSaga, ...departmentAndPositionSaga])
}
