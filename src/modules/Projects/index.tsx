import React, { useEffect } from "react"
import { RootStateOrAny, useSelector } from "react-redux"
import { Spin } from "antd"

import styles from "./index.scss"

const Projects = () => {
    const { isLoading } = useSelector((state: RootStateOrAny) => state.tuition)

    useEffect(() => {}, [])

    return (
        <div className={styles.tuitionPage}>
            <Spin spinning={isLoading}>
                <div className={styles.tuitionComponent}>
                    <h3>projects</h3>
                </div>
            </Spin>
        </div>
    )
}

export default Projects
