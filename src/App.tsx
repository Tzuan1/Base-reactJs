import React from "react"
import { Provider } from "react-redux"
import "./index.css"
import store from "@/redux/stores"
import Router from "./router"
import PopupCommon from "./components/PopupCommon"

function App() {
    return (
        <Provider store={store}>
            <>
                <Router />
                <PopupCommon />
            </>
        </Provider>
    )
}

export default App
