import { createActions, createReducer } from "reduxsauce"
import { IInitialTuitionReducer } from "@/modules/Tuition/shared/typings/tuition-type"
import { copyDeep } from "@/shared"
import { initialTutionCalendar } from "../../shared/constants"
// create actions
const { Types, Creators } = createActions({
    tuitionCalendarSuccess: ["payload"],
    tuitionCalendarError: ["payload"],
    clearDataStore: [],
    getListInvoice: ["payload"],
    getListReceipt: ["payload"],
    downloadInvoice: ["payload"],
    downloadReceipt: ["payload"]
})

export const tuitionCalendarTypes: any = Types
export default Creators

const INITIAL_STATE: IInitialTuitionReducer = copyDeep(initialTutionCalendar)

const tuitionRequest = (state = INITIAL_STATE, { payload }: any) => {
    return {
        ...state,
        isLoading: true,
        ...payload
    }
}

const tuitionSuccess = (state = INITIAL_STATE, { payload }: any) => {
    return {
        ...state,
        isLoading: false,
        ...payload
    }
}

const tuitionError = (state = INITIAL_STATE, { payload }: any) => {
    return {
        ...state,
        isLoading: false,
        ...payload
    }
}

const clearDataStore = () => {
    return copyDeep(initialTutionCalendar)
}

export const tuitionCalendarReducer = createReducer(INITIAL_STATE, {
    [Types.TUITION_CALENDAR_ERROR]: tuitionError,
    [Types.TUITION_CALENDAR_SUCCESS]: tuitionSuccess,
    [Types.CLEAR_DATA_STORE]: clearDataStore,
    [Types.GET_LIST_INVOICE]: tuitionRequest,
    [Types.GET_LIST_RECEIPT]: tuitionRequest,
    [Types.DOWNLOAD_INVOICE]: tuitionRequest,
    [Types.DOWNLOAD_RECEIPT]: tuitionRequest
})
