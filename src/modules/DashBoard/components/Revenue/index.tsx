import React, { useMemo } from "react"

// css
// import styles from "./index.module.scss"

// antd
import { Card } from "antd"

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

const Revenue = () => {
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
    return (
        <Card title="Total Revenue" className="card-common" bordered={false}>
            <Bar className="chart-cus" options={options} data={chart} />
        </Card>
    )
}

export default Revenue
