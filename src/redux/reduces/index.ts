import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"
import { History } from "history"
import { tuitionCalendarReducer } from "@/modules/Tuition/redux/reduces"
import { popupReducer } from "./popupReducer"
import {
    layoutTitleReducer,
    listDepartmentReducer
} from "@/components/Layout/redux/reduces"
import { listUserReducer } from "@/modules/User/redux/reduces"
import { userDetailReducer } from "@/modules/UserDetail/redux/reduces"

export const rootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        popup: popupReducer,
        tuition: tuitionCalendarReducer,
        layoutGlobal: layoutTitleReducer,
        listUser: listUserReducer,
        departmentAndPosition: listDepartmentReducer,
        userDetail: userDetailReducer
    })
