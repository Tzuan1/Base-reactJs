import React, { useEffect } from "react"
import { RootStateOrAny, useSelector } from "react-redux"
import { Spin, Col, Row } from "antd"

import styles from "./index.scss"

// components
import Sales from "./components/Sales"
import Revenue from "./components/Revenue"
import Products from "./components/Products"

const DashBoard = () => {
    const { isLoading } = useSelector((state: RootStateOrAny) => state.tuition)

    useEffect(() => {}, [])

    return (
        <div className={styles.dashboard}>
            <div className="container-cus">
                <Spin spinning={isLoading}>
                    <Row gutter={30} className="mb-3">
                        <Col span={16}>
                            <Sales />
                        </Col>
                        <Col span={8}>
                            <Revenue />
                        </Col>
                    </Row>
                    <Products />
                </Spin>
            </div>
        </div>
    )
}

export default DashBoard
