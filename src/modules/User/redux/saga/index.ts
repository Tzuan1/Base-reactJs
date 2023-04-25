import { takeLatest } from "redux-saga/effects"
import { listUserTypes } from "../reduces"
import listUserRequest from "../request"

export const userSaga = [
    takeLatest(listUserTypes.GET_LIST_USER, listUserRequest.getListUser),
    takeLatest(listUserTypes.GET_LIST_COUNT, listUserRequest.getListCount),
    takeLatest(listUserTypes.CREATE_USER, listUserRequest.createUser)
]
