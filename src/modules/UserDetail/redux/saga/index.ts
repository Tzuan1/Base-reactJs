import { takeLatest } from "redux-saga/effects"
import { userDetailTypes } from "../reduces"
import userDetailRequest from "../request"

export const userDetailSaga = [
    takeLatest(
        userDetailTypes.GET_USER_DETAIL,
        userDetailRequest.getUserDetail
    ),
    takeLatest(
        userDetailTypes.CHANGE_PASSWORD,
        userDetailRequest.changePassword
    ),
    takeLatest(userDetailTypes.EDIT_USER, userDetailRequest.editUser)
]
