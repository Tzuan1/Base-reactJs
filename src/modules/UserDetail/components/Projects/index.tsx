import React from "react"
import { Button, Card } from "antd"

import styles from "./index.module.scss"
import TableCustom from "@/components/TableCustom"

const Projects = () => {
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
                            <Button type="primary" className={color} key={tag}>
                                {tag}
                            </Button>
                        )
                    })}
                </>
            )
        }
    ]

    return (
        <Card
            title="Danh Sách Dự Án"
            className={`${styles.projects} card-common`}
            bordered={false}
        >
            <TableCustom columns={columns} dataSource={dataSource} />
        </Card>
    )
}

export default Projects
