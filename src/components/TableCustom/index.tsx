import React from "react"
import { Table, TableProps } from "antd"

// css
import styles from "./index.module.scss"
interface TableCustomProps extends TableProps<any> {
    // Các props tùy chọn khác nếu cần
}
const TableCustom = (props: TableCustomProps) => {
    return <Table className={styles.table} {...props} />
}

export default TableCustom
