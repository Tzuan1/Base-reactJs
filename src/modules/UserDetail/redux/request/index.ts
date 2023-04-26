import { IResponseApi } from "@/@type"
import { call, put } from "redux-saga/effects"
import { statusCode, typeNotification } from "@/shared/constants"
import userDetailService from "../../services/api"
import { userDetailTypes } from "../reduces"
import { popupTypes } from "@/redux/reduces/popupReducer"
import { NotificationCustom } from "@/shared/function"

const userDetailRequest = {
    *getUserDetail({ payload }) {
        try {
            const res: IResponseApi = yield call<any>(
                userDetailService.getUserDetail,
                payload
            )
            const { data, status } = res
            if (status === statusCode.ok) {
                yield put({
                    type: userDetailTypes.USER_DETAIL_SUCCESS,
                    payload: {
                        dataUser: data
                    }
                })
            }
        } catch (e) {
            yield put({
                type: userDetailTypes.USER_DETAIL_ERROR,
                payload: {}
            })
        }
    },
    *changePassword({ payload }) {
        try {
            const res: IResponseApi = yield call<any>(
                userDetailService.postResetPassword,
                payload
            )

            const { status } = res
            if (status === statusCode.ok) {
                yield put({
                    type: popupTypes.HIDDEN_POPUP
                })
                yield NotificationCustom({
                    type: typeNotification.success,
                    message: "Đổi Mật Khẩu Thành Công"
                })

                return
            }

            throw new Error()
        } catch (e) {
            NotificationCustom({
                type: typeNotification.error,
                message: "Đổi Mật Khẩu Thất Bại"
            })
        }
    },
    *editUser({ payload }) {
        try {
            const res: IResponseApi = yield call<any>(
                userDetailService.putEditUser,
                payload
            )

            const { status } = res
            if (status === statusCode.ok) {
                yield put({
                    type: popupTypes.HIDDEN_POPUP
                })
                yield NotificationCustom({
                    type: typeNotification.success,
                    message: "Cập Nhật Thành Công"
                })

                return
            }

            throw new Error()
        } catch (e) {
            NotificationCustom({
                type: typeNotification.error,
                message: "Cập Nhật Thất Bại"
            })
        }
    }
}

export default userDetailRequest
