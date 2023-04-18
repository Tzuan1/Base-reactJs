import { IInitialTuitionReducer } from "@/modules/Tuition/shared/typings/tuition-type"

const initialTutionCalendar: IInitialTuitionReducer = {
    isLoading: false,
    listInvoice: [],
    listReceipt: [],
    listDownloadInvoice: [],
    listDownloadReceipt: []
}

export { initialTutionCalendar }
