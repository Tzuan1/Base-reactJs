import React from "react"

// css
// import styles from "./index.module.scss"

// antd
import { Card, Table } from "antd"

const Products = () => {
    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street"
        },
        {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street"
        }
    ]

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age"
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address"
        }
    ]
    return (
        <Card title="Top Products" className="card-common" bordered={false}>
            <Table
                className="table-cus"
                dataSource={dataSource}
                columns={columns}
            />
        </Card>
    )
}

export default Products
