import { IResponseApi } from "@/@type"
import { call, put } from "redux-saga/effects"
import TuitionService from "@/modules/Tuition/services/api"
import { statusCode } from "@/shared/constants"
import { tuitionCalendarTypes } from "../reduces"

const TuitionRequest = {
    *getListInvoice({ payload }) {
        try {
            const res: IResponseApi = yield call<any>(
                TuitionService.getListInvoice,
                payload
            )
            const { data, status } = res
            if (status === statusCode.ok) {
                yield put({
                    type: tuitionCalendarTypes.TUITION_CALENDAR_SUCCESS,
                    payload: {
                        listInvoice: data
                    }
                })
            }
        } catch (e) {
            yield put({
                type: tuitionCalendarTypes.TUITION_CALENDAR_ERROR,
                payload: {}
            })
        }
    },
    *getListReceipt({ payload }) {
        try {
            const res: IResponseApi = yield call<any>(
                TuitionService.getListReceipt,
                payload
            )
            const { data, status } = res
            if (status === statusCode.ok) {
                yield put({
                    type: tuitionCalendarTypes.TUITION_CALENDAR_SUCCESS,
                    payload: {
                        listReceipt: data
                    }
                })
            }
        } catch (e) {
            yield put({
                type: tuitionCalendarTypes.TUITION_CALENDAR_ERROR,
                payload: {}
            })
        }
    },
    *downloadInvoicePdf({ payload }) {
        const { invoice_main_no, callback }: any = payload
        try {
            const res: IResponseApi = yield call<any>(
                TuitionService.downloadInvoicePdf,
                { invoice_main_no }
            )
            const { data, status } = res
            if (status === statusCode.ok) {
                callback(data)
                yield put({
                    type: tuitionCalendarTypes.TUITION_CALENDAR_SUCCESS,
                    payload: {}
                })
            }
        } catch (e) {
            yield put({
                type: tuitionCalendarTypes.TUITION_CALENDAR_ERROR,
                payload: {}
            })
        }
    },
    *downloadReceiptPdf({ payload }) {
        const { receipt_no, callback }: any = payload
        try {
            const res: IResponseApi = yield call<any>(
                TuitionService.downloadReceiptPdf,
                { receipt_no }
            )
            const { data, status } = res
            if (status === statusCode.ok) {
                callback(data.data)
                yield put({
                    type: tuitionCalendarTypes.TUITION_CALENDAR_SUCCESS,
                    payload: {}
                })
            }
        } catch (e) {
            yield put({
                type: tuitionCalendarTypes.TUITION_CALENDAR_ERROR,
                payload: {}
            })
        }
    }
}

export default TuitionRequest
