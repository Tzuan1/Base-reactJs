import React from "react"
import { Table, TableProps } from "antd"

interface TableCustomProps extends TableProps<any> {
    // Các props tùy chọn khác nếu cần
}

const TableCustom: React.FC<TableCustomProps> = ({
    columns,
    dataSource,
    ...restProps
}) => {
    return <Table columns={columns} dataSource={dataSource} {...restProps} />
}

export default TableCustom
