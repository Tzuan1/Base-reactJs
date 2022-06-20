import React from "react"
import { Dropdown } from "antd"
import styles from "./index.module.scss"

type IDropdownCustom = {
    titleDropdown?: string
    iconDropdown?: any
    classCustom?: string
    placement?: any
    menuDropdown?: any
}

const DropdownCustom = ({
    titleDropdown,
    iconDropdown,
    classCustom,
    placement,
    menuDropdown
}: IDropdownCustom) => {
    return (
        <Dropdown
            overlay={menuDropdown}
            placement={placement}
            trigger={["click"]}
        >
            <a
                href="#"
                className={styles.headerLink}
                onClick={e => e.preventDefault()}
            >
                {titleDropdown}
                <span>{iconDropdown}</span>
            </a>
        </Dropdown>
    )
}

export default DropdownCustom
