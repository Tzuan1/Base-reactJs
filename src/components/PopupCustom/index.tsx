import React, { useState } from "react"
import { Modal } from "antd"
import ButtonCustom from "../ButtonCustom"

import styles from "./index.module.scss"

const PopupCustom = ({ className, textButton, titleModal, children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <ButtonCustom
                className={className}
                text={textButton}
                type="primary"
                onClick={showModal}
            />

            <Modal
                className={styles.popupScreen}
                title={titleModal}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
            >
                {children}
            </Modal>
        </>
    )
}

export default PopupCustom
