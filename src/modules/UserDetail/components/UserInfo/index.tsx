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
            className={`${styles.userInfo} card-common`}
            bordered={false}
        >
            <div className="info_action">
                <Button className="info_btn">Change Password</Button>
                <Button className="info_icon">
                    <img src={IconEdit} alt="" className="" />
                </Button>
            </div>
            <div className="info_content">
                <Row gutter={20}>
                    <Col span={8} className="mb">
                        <h4 className="label">Mã NV</h4>
                        10
                    </Col>
                    <Col span={16} className="mb">
                        <h4 className="label">Họ Tên</h4>
                        Hoàng Trọng Cừ
                    </Col>
                    <Col span={24} className="mb">
                        <h4 className="label">Email</h4>
                        cu.hoang@miichisoft.com
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Bộ Phận</h4>
                        D1
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Giới Tính</h4>
                        Nam
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Vị Trí</h4>
                        PM
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Level</h4>
                        Senior A
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Ngày Vào Công Ty</h4>
                        20/03/2018
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Chính Thức</h4>
                        20/04/2018
                    </Col>
                    <Col span={12} className="mb">
                        <span className="info_status dark">Retired</span>
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Ngày Nghỉ Việc</h4>
                        20/04/2022
                    </Col>
                </Row>
            </div>
        </Card>
    )
}

export default UserInfo
