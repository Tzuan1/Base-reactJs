import { takeLatest } from "redux-saga/effects"
import { tuitionCalendarTypes } from "@/modules/Tuition/redux/reduces"
import TuitionRequest from "@/modules/Tuition/redux/request/index"

export const tuitionSaga = [
    takeLatest(
        tuitionCalendarTypes.GET_LIST_INVOICE,
        TuitionRequest.getListInvoice
    ),
    takeLatest(
        tuitionCalendarTypes.GET_LIST_RECEIPT,
        TuitionRequest.getListReceipt
    ),
    takeLatest(
        tuitionCalendarTypes.DOWNLOAD_INVOICE,
        TuitionRequest.downloadInvoicePdf
    ),
    takeLatest(
        tuitionCalendarTypes.DOWNLOAD_RECEIPT,
        TuitionRequest.downloadReceiptPdf
    )
]
