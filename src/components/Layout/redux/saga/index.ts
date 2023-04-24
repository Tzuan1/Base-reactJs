import { takeLatest } from "redux-saga/effects"
import { layoutActionTypes } from "../reduces"
import listHeaderRequest from "../request"

export const departmentAndPositionSaga = [
    takeLatest(
        layoutActionTypes.SET_LIST_DEPARTMENT,
        listHeaderRequest.getListDepartment
    ),
    takeLatest(
        layoutActionTypes.SET_LIST_POSITION,
        listHeaderRequest.getListPosition
    )
]
