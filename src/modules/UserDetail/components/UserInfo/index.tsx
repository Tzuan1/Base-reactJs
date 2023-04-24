import React, { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "antd"

import styles from "./index.module.scss"
//img
import IconEdit from "@/assets/icons/edit.png"
import PopupCustom from "@/components/PopupCustom"
import ChangePassword from "../ChangePassword"
import EditUser from "../EditUser"
import ModalCustom from "@/components/ModalCustom"

const UserInfo = () => {
    useEffect(() => {}, [])
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    return (
        <Card
            title="Thông Tin Nhân Viên"
            className={`${styles.userInfo} card-common`}
            bordered={false}
        >
            <div className="info_action">
                <PopupCustom
                    className="info_btn"
                    textButton="Change Password"
                    titleModal="Thay Đổi Mật Khẩu"
                >
                    <ChangePassword />
                </PopupCustom>
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
