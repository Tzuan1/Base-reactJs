import React from "react"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"

import { popupTypes } from "@/redux/reduces/popupReducer"
import styles from "./index.module.scss"
import { listNamePopup } from "@/shared/constants"
import { ListNamePopup } from "@/shared/enum"
import CreateUser from "@/modules/User/components/CreateUser"
import CreateCustomer from "@/modules/Customer/components/CreateCustomer"
import ChangePassword from "@/modules/UserDetail/components/ChangePassword"
import EditUser from "@/modules/UserDetail/components/EditUser"
import SearchFilter from "@/modules/User/components/Filters"

const PopupCommon = () => {
    const dispatch = useDispatch()
    const { isShow, typePopup, params }: any = useSelector<any>(
        state => state.popup
    )

    const renderPopup = () => {
        if (typePopup === ListNamePopup.popupCreateUser) {
            return <CreateUser />
        }
        if (typePopup === ListNamePopup.popupChangePassword) {
            return <ChangePassword />
        }
        if (typePopup === ListNamePopup.popupEditUserDetail) {
            return <EditUser />
        }
        if (typePopup === ListNamePopup.popupCreateCustomer) {
            return <CreateCustomer />
        }
        if (typePopup === ListNamePopup.popupChangePassword) {
            return <ChangePassword />
        }
        if (typePopup === ListNamePopup.popupEditUserDetail) {
            return <EditUser />
        }
        if (typePopup === ListNamePopup.popupFilter) {
            return <SearchFilter />
        }
        return ""
    }

    const handleOk = () => {
        dispatch({
            type: popupTypes.HIDDEN_POPUP
        })
    }

    const handleCancel = () => {
        dispatch({
            type: popupTypes.HIDDEN_POPUP
        })
    }
    const listCssModal = () => {
        if (typePopup === listNamePopup.popupCreateMessageContact) {
            return styles.newMessageModal
        }
        if (typePopup === listNamePopup.popupClassReportDetail) {
            return styles.reportDetailModal
        }
        if (typePopup === listNamePopup.popupCreateUser) {
            return styles.popupScreen
        }
        if (typePopup === listNamePopup.popupChangePassword) {
            return styles.popupScreen
        }
        if (typePopup === listNamePopup.popupEditUserDetail) {
            return styles.popupFilter
        }
        return ""
    }

    return (
        <Modal
            destroyOnClose={true}
            className={`${listCssModal()} ${params?.className} ${
                styles.popupScreen
            }`}
            open={isShow}
            title={params?.titleModal}
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable={false}
            footer={null}
        >
            {renderPopup()}
        </Modal>
    )
}

export default PopupCommon
