import React from "react"

// css
import styles from "./index.scss"

// components
import TableCustom from "@/components/TableCustom"
import Dashboard from "./components/Dashboard"
import TabsCustom from "@/components/TabsCustom"

// type
type ITypeTabs = {
    key?: number
    label?: string
    children?: string
    count?: number
    items?: any
}

const User = ({ key, label, children, handleSearch }: any) => {
    const count = 10
    const onChange = (key: string) => {
        console.log(key)
    }

    const items: ITypeTabs["items"] = [
        {
            key: "1",
            label: <p>Dashboard</p>,
            children: <Dashboard />
        },
        {
            key: "2",
            label: (
                <p>
                    All <span className="count">{count}</span>
                </p>
            ),
            children: <TableCustom />
        },
        {
            key: "3",
            label: (
                <p>
                    Đang Làm Việc <span className="count">{count}</span>
                </p>
            ),
            children: `Content of Tab Pane 3`
        },
        {
            key: "4",
            label: (
                <p>
                    Đã Nghỉ Việc <span className="count">{count}</span>
                </p>
            ),
            children: `Content of Tab Pane 3`
        },
        {
            key: "5",
            label: (
                <p>
                    Chờ Nhận Việc <span className="count">{count}</span>
                </p>
            ),
            children: `Content of Tab Pane 3`
        }
    ]

    return (
        <div className={styles.user}>
            <TabsCustom
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
            />
        </div>
    )
}

export default User
