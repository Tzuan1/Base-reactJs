import React from "react"

// css
import styles from "./index.module.scss"

// antd
import { Tabs, TabsProps } from "antd"

const TabsCustom = (props: TabsProps) => {
    return <Tabs className={styles.tabsCustom} {...props} />
}

export default TabsCustom
