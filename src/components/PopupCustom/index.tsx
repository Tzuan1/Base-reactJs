import React, { useState } from "react"
import { Modal } from "antd"
import ButtonCustom from "../ButtonCustom"

const PopupCustom = ({ children }) => {
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
                text="Open Modal"
                type="primary"
                onClick={showModal}
            />

            <Modal
                title="Basic Modal"
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
