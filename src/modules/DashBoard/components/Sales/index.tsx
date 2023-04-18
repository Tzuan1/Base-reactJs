import React from "react"

// css
// import styles from "./index.module.scss"

// antd
import { Card, Col, Row } from "antd"

//img
import Sale from "@/assets/icons/sale.svg"
import Order from "@/assets/icons/order.svg"
import Sold from "@/assets/icons/sold.svg"
import Customers from "@/assets/icons/customers.svg"

const Sales = () => {
    return (
        <Card title="Today’s Sales" className="card-common" bordered={false}>
            <Row gutter={20}>
                <Col span={6}>
                    <Card className="card-cus red">
                        <img src={Sale} />
                        <h4 className="title">$1k</h4>
                        <p className="name">Total Sales</p>
                        <p className="date">+8% from yesterday</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="card-cus orange">
                        <img src={Order} />
                        <h4 className="title">300</h4>
                        <p className="name">Total Order</p>
                        <p className="date">+5% from yesterday</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="card-cus green">
                        <img src={Sold} />
                        <h4 className="title">5</h4>
                        <p className="name">Product Sold</p>
                        <p className="date">+1,2% from yesterday</p>
                    </Card>
                </Col>
                <Col span={6}>
                    <Card className="card-cus purple">
                        <img src={Customers} />
                        <h4 className="title">8</h4>
                        <p className="name">New Customers</p>
                        <p className="date">+0,5% from yesterday</p>
                    </Card>
                </Col>
            </Row>
        </Card>
    )
}

export default Sales
