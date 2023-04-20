import { IResponeApi } from "@/@type"
import { call, put } from "redux-saga/effects"
import { statusCode } from "@/shared/constants"
import { listUserTypes } from "../reduces"
import UserService from "../../services/api"

const listUserRequest = {
    *getListUser({ payload }) {
        try {
            const res: IResponeApi = yield call<any>(
                UserService.getListUser,
                payload
            )
            const { data, status } = res
            if (status === statusCode.ok) {
                yield put({
                    type: listUserTypes.LIST_USER_SUCCESS,
                    payload: {
                        listUser: data
                    }
                })
            }
        } catch (e) {
            yield put({
                type: listUserTypes.LIST_USER_ERROR,
                payload: {}
            })
        }
    }
}

export default listUserRequest
