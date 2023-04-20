import React from "react"
import { Modal } from "antd"
import { useDispatch, useSelector } from "react-redux"

import { popupTypes } from "@/redux/reduces/popupReducer"
import styles from "./index.module.scss"
import { listNamePopup } from "@/shared/constants"

const PopupCommon = () => {
    const dispatch = useDispatch()
    const { isShow, typePopup }: any = useSelector<any>(state => state.popup)

    const renderPopup = () => {
        // if (typePopup === listNamePopup.popupCreateMessageContact) {
        //     return <NewMessageModal />
        // }
        return <h3>hello</h3>
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
        return ""
    }

    return (
        <Modal
            destroyOnClose={true}
            className={listCssModal()}
            visible={isShow}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
        >
            {renderPopup()}
        </Modal>
    )
}

export default PopupCommon