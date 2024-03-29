import React, { useEffect } from "react"

import { Col, Row } from "antd"

import styles from "./index.scss"
import CustomerInfo from "./components/CustomerInfo"
import Reports from "./components/Reports"
import Projects from "./components/Projects"

const CustomerDetail = () => {
    useEffect(() => {}, [])

    return (
        <div className={styles.userDetail}>
            <div className="info">
                <div className="info_head">
                    <h3 className="name">
                        MiichiSoft <span className="label">vip</span>
                    </h3>
                </div>
                <div className="info_container">
                    <Row gutter={20}>
                        <Col span={12}>
                            <CustomerInfo />
                        </Col>
                        <Col span={12}>
                            <Reports />
                        </Col>
                    </Row>
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default CustomerDetail
