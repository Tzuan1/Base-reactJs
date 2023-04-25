import { call, put } from "redux-saga/effects"
import Creators, { layoutActionTypes } from "../reduces"
import { IResponseApi } from "@/@type"
import listDepartmentService from "../../services/api"
import { statusCode } from "@/shared/constants"

const listHeaderRequest = {
    *setTextSaga(action) {
        yield put(Creators.setLayoutTitle(action.text))
    },
    *getListDepartment() {
        try {
            const res: IResponseApi = yield call<any>(
                listDepartmentService.getListDepartment
            )
            const { data, status } = res
            const newData = data.data.map(item => {
                return { value: item.id, label: item.name }
            })
            if (status === statusCode.ok) {
                yield put({
                    type: layoutActionTypes.LIST_DEPARTMENT_SUCCESS,
                    payload: {
                        listDepartment: newData
                    }
                })
            }
            return
        } catch (e) {
            return
        }
    },
    *getListPosition() {
        try {
            const res: IResponseApi = yield call<any>(
                listDepartmentService.getListPosition
            )
            const { data, status } = res
            const newData = data.data.map(item => {
                return { value: item.id, label: item.name }
            })
            if (status === statusCode.ok) {
                yield put({
                    type: layoutActionTypes.LIST_POSITION_SUCCESS,
                    payload: {
                        ListPosition: newData
                    }
                })
            }
            return
        } catch (e) {
            return
        }
    }
}

export default listHeaderRequest
