import React, { useEffect, useMemo } from "react"
import { RootStateOrAny, useSelector } from "react-redux"
import { Spin, Card, Col, Row, Table } from "antd"

import styles from "./index.module.scss"

//img
import Sale from "@/assets/icons/sale.svg"
import Order from "@/assets/icons/order.svg"
import Sold from "@/assets/icons/sold.svg"
import Customers from "@/assets/icons/customers.svg"

// chart
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const DashBoard = () => {
    const { isLoading } = useSelector((state: RootStateOrAny) => state.tuition)

    useEffect(() => {}, [])
    const options: any = useMemo(
        () => ({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "bottom" as const,
                    labels: {
                        color: "#13202F",
                        font: {
                            size: 15,
                            weight: "500",
                            lineHeight: "22px"
                        },
                        boxWidth: 22,
                        boxHeight: 22,
                        padding: 25
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: "#13202F",
                        font: {
                            size: 15
                        }
                    },
                    title: {
                        display: true,
                        color: "#13202F",
                        align: "end",
                        font: {
                            size: 13,
                            lineHeight: "19px"
                        }
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: "#13202F",
                        font: {
                            size: 13
                        }
                    },
                    title: {
                        display: true,
                        color: "#13202F",
                        align: "end",
                        font: {
                            size: 13,
                            lineHeight: "19px"
                        }
                    }
                }
            }
        }),
        []
    )

    const data = [
        { count: 10 },
        { count: 20 },
        { count: 15 },
        { count: 25 },
        { count: 22 },
        { count: 30 },
        { count: 28 }
    ]

    const labels = useMemo(
        () => [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        []
    )

    const chart = useMemo(
        () => ({
            labels,
            datasets: [
                {
                    label: "Online Sales",
                    data: data.map(row => row.count),
                    backgroundColor: "#0095FF"
                }
            ]
        }),
        []
    )

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
        <div className={styles.dashboard}>
            <div className="container-cus">
                <Spin spinning={isLoading}>
                    <Row gutter={30} className="mb-3">
                        <Col span={16}>
                            <Card
                                title="Today’s Sales"
                                className="card-common"
                                bordered={false}
                            >
                                <Row gutter={20}>
                                    <Col span={6}>
                                        <Card className="card-cus red">
                                            <img src={Sale} />
                                            <h4 className="title">$1k</h4>
                                            <p className="name">Total Sales</p>
                                            <p className="date">
                                                +8% from yesterday
                                            </p>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card className="card-cus orange">
                                            <img src={Order} />
                                            <h4 className="title">300</h4>
                                            <p className="name">Total Order</p>
                                            <p className="date">
                                                +5% from yesterday
                                            </p>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card className="card-cus green">
                                            <img src={Sold} />
                                            <h4 className="title">5</h4>
                                            <p className="name">Product Sold</p>
                                            <p className="date">
                                                +1,2% from yesterday
                                            </p>
                                        </Card>
                                    </Col>
                                    <Col span={6}>
                                        <Card className="card-cus purple">
                                            <img src={Customers} />
                                            <h4 className="title">8</h4>
                                            <p className="name">
                                                New Customers
                                            </p>
                                            <p className="date">
                                                +0,5% from yesterday
                                            </p>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                title="Total Revenue"
                                className="card-common"
                                bordered={false}
                            >
                                <Bar options={options} data={chart} />
                            </Card>
                        </Col>
                    </Row>
                    <Card
                        title="Top Products"
                        className="card-common"
                        bordered={false}
                    >
                        <Table
                            className="table-cus"
                            dataSource={dataSource}
                            columns={columns}
                        />
                    </Card>
                </Spin>
            </div>
        </div>
    )
}

export default DashBoard
