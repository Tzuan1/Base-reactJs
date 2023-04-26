import React, { useEffect } from "react"
import { Button, Card, Col, Row } from "antd"

import styles from "./index.module.scss"
//img
import IconEdit from "@/assets/icons/edit.png"

const UserInfo = () => {
    useEffect(() => {}, [])
    return (
        <Card
            title="Thông Tin Nhân Viên"
            className={`${styles.customerInfo} card-common`}
            bordered={false}
        >
            <div className="info_action">
                <Button className="info_icon">
                    <img src={IconEdit} alt="" className="" />
                </Button>
            </div>
            <div className="info_content">
                <Row gutter={20}>
                    <Col span={24} className="mb">
                        <h4 className="label">Customer No</h4>
                        ADS
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Name</h4>
                        MIICHISOFT
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Customer Name (JP)</h4>
                        ミイチソフト
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Type</h4>
                        SI
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Level</h4>
                        <span className="info_status green">VIP</span>
                    </Col>
                    <Col span={24} className="mb">
                        <h4 className="label">Ghi Chú</h4>
                        PM
                    </Col>
                </Row>
            </div>
        </Card>
    )
}

export default UserInfo
