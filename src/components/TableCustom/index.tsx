import React from "react"
import { Table, TableProps, Button } from "antd"

// css
import styles from "./index.module.scss"
interface TableCustomProps extends TableProps<any> {
    // Các props tùy chọn khác nếu cần
}

const TableCustom: React.FC<TableCustomProps> = ({ ...restProps }) => {
    const dataSource = [
        {
            key: "1",
            project_code: "002_ADS_PB",
            project_name: "MF002",
            project_type: "LB",
            manager: "Hoàng Trọng Cừ",
            customer: "ADS CO.,LTD",
            size: "10",
            release: "2023/03/13",
            status: ["Developing"]
        },
        {
            key: "2",
            project_code: "002_ADS_PB",
            project_name: "MF002",
            project_type: "LB",
            manager: "Hoàng Trọng Cừ",
            customer: "ADS CO.,LTD",
            size: "10",
            release: "2023/03/13",
            status: ["Private"]
        },
        {
            key: "3",
            project_code: "002_ADS_PB",
            project_name: "MF002",
            project_type: "LB",
            manager: "Hoàng Trọng Cừ",
            customer: "ADS CO.,LTD",
            size: "10",
            release: "2023/03/13",
            status: ["UAT"]
        },
        {
            key: "4",
            project_code: "002_ADS_PB",
            project_name: "MF002",
            project_type: "LB",
            manager: "Hoàng Trọng Cừ",
            customer: "ADS CO.,LTD",
            size: "10",
            release: "2023/03/13",
            status: ["Closing"]
        },
        {
            key: "5",
            project_code: "002_ADS_PB",
            project_name: "MF002",
            project_type: "LB",
            manager: "Hoàng Trọng Cừ",
            customer: "ADS CO.,LTD",
            size: "10",
            release: "2023/03/13",
            status: ["Closed"]
        }
    ]

    const columns = [
        {
            title: "Project  Code",
            key: "project_code",
            dataIndex: "project_code",
            render: (text: string) => <a className="link">{text}</a>
        },
        {
            title: "Project Name",
            dataIndex: "project_name",
            key: "project_name"
        },
        {
            title: "Project Type",
            dataIndex: "project_type",
            key: "project_type"
        },
        {
            title: "Manager",
            dataIndex: "manager",
            key: "manager"
        },
        {
            title: "Customer",
            dataIndex: "customer",
            key: "customer"
        },
        {
            title: "Size (MM)",
            dataIndex: "size",
            key: "size"
        },
        {
            title: "β Release",
            dataIndex: "release",
            key: "release"
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            render: (status: string[]) => (
                <>
                    {status.map(tag => {
                        let color = "success"
                        switch (tag) {
                            case "Developing": {
                                color = "success"
                                break
                            }
                            case "Private": {
                                color = "yellow"
                                break
                            }
                            case "UAT": {
                                color = "red"
                                break
                            }
                            case "Closing": {
                                color = "primary"
                                break
                            }
                            case "Closed": {
                                color = "light"
                                break
                            }
                            default: {
                                color = "success"
                                break
                            }
                        }
                        return (
                            <Button type="primary" className={color}>
                                {tag}
                            </Button>
                        )
                    })}
                </>
            )
        }
    ]
    return (
        <Table
            className={styles.table}
            columns={columns}
            dataSource={dataSource}
            {...restProps}
        />
    )
}

export default TableCustom
