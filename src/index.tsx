import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./shared/i18n"
import * as serviceWorker from "./serviceWorker"
// css
import "antd/dist/antd.css"
import "./assets/styles/global.scss"

ReactDOM.render(<App />, document.getElementById("root"))

serviceWorker.unregister()
