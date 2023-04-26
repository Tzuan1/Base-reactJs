import React, { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "antd"

import styles from "./index.module.scss"
//img
import IconEdit from "@/assets/icons/edit.png"
import EditUser from "../EditUser"
import ModalCustom from "@/components/ModalCustom"

const UserInfo = () => {
    useEffect(() => {}, [])
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    return (
        <Card
            title="Thông Tin Nhân Viên"
            className={`${styles.customerInfo} card-common`}
            bordered={false}
        >
            <div className="info_action">
                <Button
                    className="info_icon"
                    onClick={() => setModalOpen(true)}
                >
                    <img src={IconEdit} alt="" className="" />
                </Button>
                <ModalCustom
                    open={modalOpen}
                    maskClosable={true}
                    handleCancel={() => setModalOpen(false)}
                    className={styles.popupFilter}
                    title="Nhân Viên"
                >
                    <EditUser />
                </ModalCustom>
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
                        <span className="info_status dark">Retired</span>
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
