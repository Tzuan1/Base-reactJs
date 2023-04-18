import React, { useEffect } from "react"
import { RootStateOrAny, useSelector } from "react-redux"
import { Spin } from "antd"

import styles from "./index.scss"

const DashBoard = () => {
    const { isLoading } = useSelector((state: RootStateOrAny) => state.tuition)

    useEffect(() => {}, [])

    return (
        <div className={styles.dashboard}>
            <Spin spinning={isLoading}>
                <div className={styles.dashboardComponent}>
                    <h3>Dashboard</h3>
                </div>
            </Spin>
        </div>
    )
}

export default DashBoard
