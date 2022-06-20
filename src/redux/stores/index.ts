import createSagaMiddleware from "redux-saga"
import { configureStore } from "@reduxjs/toolkit"
import { routerMiddleware } from "connected-react-router"
import { rootReducer } from "@/redux/reduces"
import rootSaga from "@/redux/saga"
import history from "@/shared/helper/history"

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: rootReducer(history),
    middleware: [sagaMiddleware, routerMiddleware(history)]
})
sagaMiddleware.run(rootSaga)

export default store
