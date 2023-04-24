import { NotificationCustom } from "@/shared/function"
import { IResponseApi } from "@/@type"
import { call, put } from "redux-saga/effects"
import { statusCode, typeNotification } from "@/shared/constants"
import { listUserTypes } from "../reduces"
import UserService from "../../services/api"
import { popupTypes } from "@/redux/reduces/popupReducer"

const listUserRequest = {
    *getListUser({ payload }) {
        try {
            const res: IResponseApi = yield call<any>(
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
    },
    *getListCount() {
        try {
            const res: IResponseApi = yield call<any>(UserService.getListCount)
            const { data, status } = res
            if (status === statusCode.ok) {
                yield put({
                    type: listUserTypes.LIST_USER_SUCCESS,
                    payload: {
                        countActiveUser: data.data.active_user,
                        countWaitUser: data.data.all_user,
                        countAllUser: data.data.off_user,
                        countOffUser: data.data.wait_user
                    }
                })
            }
        } catch (e) {
            yield put({
                type: listUserTypes.LIST_USER_ERROR,
                payload: {}
            })
        }
    },
    *createUser({ payload }) {
        try {
            const res: IResponseApi = yield call<any>(
                UserService.postUser,
                payload
            )
            const { status } = res
            if (status === statusCode.ok) {
                yield put({
                    type: popupTypes.HIDDEN_POPUP
                })
                NotificationCustom({
                    type: typeNotification.success,
                    message: "Thêm Nhân Viên Thành Công"
                })
            }
        } catch (e) {
            NotificationCustom({
                type: typeNotification.error,
                message: "Thêm Nhân Viên Thất Bại"
            })
        }
    }
}

export default listUserRequest
