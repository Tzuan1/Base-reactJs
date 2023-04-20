import { takeLatest } from "redux-saga/effects"
import { listUserTypes } from "../reduces"
import listUserRequest from "../request"

export const userSaga = [
    takeLatest(listUserTypes.GET_LIST_USER, listUserRequest.getListUser)
]
