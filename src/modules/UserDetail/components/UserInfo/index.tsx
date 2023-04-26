import React, { useEffect } from "react"
import { Button, Card, Col, Row } from "antd"

import styles from "./index.module.scss"
//img
import IconEdit from "@/assets/icons/edit.png"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import {
    checkGenderUser,
    checkLevelUser,
    checkStatusUser,
    getColorStatus
} from "@/shared/function"
import { popupTypes } from "@/redux/reduces/popupReducer"
import { ListNamePopup } from "@/shared/enum"
import ButtonCustom from "@/components/ButtonCustom"

const UserInfo = () => {
    const dispatch = useDispatch()
    useEffect(() => {}, [])
    const userDetailData = useSelector(
        (state: RootStateOrAny) => state.userDetail.dataUser.data
    )

    const togglePopupChangePasswords = () => {
        dispatch({
            type: popupTypes.SHOW_POPUP,
            payload: {
                typePopup: ListNamePopup.popupChangePassword,
                params: {
                    className: "info_btn",
                    titleModal: "Thay Đổi Mật Khẩu"
                }
            }
        })
    }

    const togglePopupEditUser = () => {
        dispatch({
            type: popupTypes.SHOW_POPUP,
            payload: {
                typePopup: ListNamePopup.popupEditUserDetail,
                params: {
                    className: "popupFilter",
                    titleModal: "Nhân Viên"
                }
            }
        })
    }
    return (
        <Card
            title="Thông Tin Nhân Viên"
            className={`${styles.userInfo} card-common`}
            bordered={false}
        >
            <div className="info_action">
                <ButtonCustom
                    className="info_btn"
                    text="Change Password"
                    onClick={() => togglePopupChangePasswords()}
                />
                <Button
                    className="info_icon"
                    onClick={() => togglePopupEditUser()}
                >
                    <img src={IconEdit} alt="" className="" />
                </Button>
            </div>
            <div className="info_content">
                <Row gutter={20}>
                    <Col span={8} className="mb">
                        <h4 className="label">Mã NV</h4>
                        {userDetailData?.code}
                    </Col>
                    <Col span={16} className="mb">
                        <h4 className="label">Họ Tên</h4>
                        {userDetailData?.full_name}
                    </Col>
                    <Col span={24} className="mb">
                        <h4 className="label">Email</h4>
                        {userDetailData?.email}
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Bộ Phận</h4>
                        {userDetailData?.department.name}
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Giới Tính</h4>
                        {checkGenderUser(userDetailData?.gender)}
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Vị Trí</h4>
                        {userDetailData?.position.name}
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Level</h4>
                        {checkLevelUser(userDetailData?.level)}
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Ngày Vào Công Ty</h4>
                        {userDetailData?.start_date}
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Chính Thức</h4>
                        {userDetailData?.official_start_date}
                    </Col>
                    <Col span={12} className="mb">
                        <Button
                            type="primary"
                            className={getColorStatus(
                                checkStatusUser(userDetailData?.status)
                            )}
                        >
                            {checkStatusUser(userDetailData?.status)}
                        </Button>
                    </Col>
                    <Col span={12} className="mb">
                        <h4 className="label">Ngày Nghỉ Việc</h4>
                        {userDetailData?.date_off}
                    </Col>
                </Row>
            </div>
        </Card>
    )
}

export default UserInfo
