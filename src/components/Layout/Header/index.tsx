import React from "react"

import styles from "./index.module.scss"
import Notify from "@/assets/icons/notification.svg"

import { Dropdown, Space } from "antd"
import { RootStateOrAny, useSelector } from "react-redux"

const HeaderCompany = () => {
    const titleHeader = useSelector(
        (state: RootStateOrAny) => state.layoutTitle.currentText
    )
    return (
        <div className={styles.headerCommon}>
            <h2 className="title">{titleHeader}</h2>
            <div className="header-info">
                <div className="header-notify">
                    <img src={Notify} alt="notification" />
                </div>
                <Dropdown menu={{}} trigger={["click"]}>
                    <a onClick={e => e.preventDefault()}>
                        <Space>
                            <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                                className="avatar"
                                alt=""
                            />
                            HoangCu
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
    )
}

export default React.memo(HeaderCompany)
