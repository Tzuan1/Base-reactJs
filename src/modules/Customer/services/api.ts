import apiServices from "@/services/api/axios"
import {
    ITypeParamsDownloadInvoice,
    ITypeParamsDownloadReceipt,
    ITypeParamsGetInvoice,
    ITypeParamsGetReceipt
} from "@/modules/Tuition/shared/typings/tuition-type"

const TuitionService = {
    getListInvoice({ limit, pageIndex }: ITypeParamsGetInvoice) {
        let url = `/list/invoice?limit=${limit}&pageIndex=${pageIndex}`
        return apiServices.get(url)
    },

    getListReceipt({ limit, pageIndex }: ITypeParamsGetReceipt) {
        let url = `/list/receipt?limit=${limit}&pageIndex=${pageIndex}`
        return apiServices.get(url)
    },
    downloadInvoicePdf({ invoice_main_no }: ITypeParamsDownloadInvoice) {
        let url = `/invoice/download-invoice/${invoice_main_no}`
        return apiServices.get(url)
    },
    downloadReceiptPdf({ receipt_no }: ITypeParamsDownloadReceipt) {
        let url = `/receipt/download-receipt/${receipt_no}`
        return apiServices.get(url)
    }
}

export default TuitionService
