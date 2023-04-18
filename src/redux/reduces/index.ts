import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import { History } from "history"
import { tuitionCalendarReducer } from "@/modules/Tuition/redux/reduces"
import { popupReducer } from "./popupReducer"
import { layoutTitleReducer } from "@/components/Layout/redux/reduces"

export const rootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        popup: popupReducer,
        tuition: tuitionCalendarReducer,
        layoutTitle: layoutTitleReducer
    })
