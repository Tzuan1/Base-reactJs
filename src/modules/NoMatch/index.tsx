import React from "react"
import { FrownOutlined } from "@ant-design/icons"
import styles from "./index.module.scss"

const NoMatch = () => {
    return (
        <div className={styles.notPage}>
            <div className={styles.bgPage}>
                <div className="d-flex justify-content-center">
                    <h1>Error 404</h1>
                    <FrownOutlined />
                </div>
                <h3>Oops!Page not found</h3>
            </div>
        </div>
    )
}

export default NoMatch
