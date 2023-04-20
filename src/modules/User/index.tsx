import React, { useState, useMemo } from "react"
import moment from "moment"
// css
import styles from "./index.scss"

//img
import IconFilterR from "@/assets/icons/filter-regular.png"
import IconFilter from "@/assets/icons/filter-bold.png"

// components
import TableCustom from "@/components/TableCustom"
import Dashboard from "./components/Dashboard"
import CreateUser from "./components/CreateUser"
import TabsCustom from "@/components/TabsCustom"
import InputCustom from "@/components/InputCustom"
import ModalCustom from "@/components/ModalCustom"
import SelectCustom from "@/components/SelectCustom"
import DatePickerCustom from "@/components/DatePickerCustom"

import { Button, Form, Col, Row, Select, Space } from "antd"
import PopupCustom from "@/components/PopupCustom"

// type
type ITypeTabs = {
    key?: number
    label?: string
    children?: string
    count?: number
    items?: any
}

const User = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [form] = Form.useForm()
    const count = 10
    const { Option } = Select
    const onChange = (key: string) => {
        console.log(key)
    }
    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`)
    }
    const showAddUser = () => {
        document.getElementById("user")?.classList.toggle("active")
        document.getElementById("btn-add")?.classList.toggle("active")
    }
    const listSelectDepartment = useMemo(() => {
        return [
            {
                value: "d1",
                name: "D1"
            },
            {
                value: "d2",
                name: "D2"
            }
        ]
    }, [])
    const listSelectPosition = useMemo(() => {
        return [
            {
                value: "CEO",
                name: "CEO"
            },
            {
                value: "CTO",
                name: "CTO"
            },
            {
                value: "DM",
                name: "DM"
            }
        ]
    }, [])
    const dataSource = [
        {
            key: "1",
            id: "MI0001",
            name: "Hoàng Trọng Cừ",
            email: "cu.hoang@miichisoft.com",
            department: "D1",
            position: "CEO",
            date: "2020/01/01",
            status: ["Onboarding"]
        },
        {
            key: "2",
            id: "MI0002",
            name: "Hoàng Trọng Cừ",
            email: "cu.hoang@miichisoft.com",
            department: "D2",
            position: "CEO",
            date: "2020/01/01",
            status: ["Waiting"]
        },
        {
            key: "3",
            id: "MI0003",
            name: "Hoàng Trọng Cừ",
            email: "cu.hoang@miichisoft.com",
            department: "D2",
            position: "CTO",
            date: "2020/01/01",
            status: ["Retired"]
        }
    ]

    const columns = [
        {
            title: "Mã Nhân Viên",
            key: "id",
            dataIndex: "id",
            render: (text: string) => <a className="link">{text}</a>
        },
        {
            title: "Tên Nhân Viên",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Bộ Phận",
            dataIndex: "department",
            key: "department"
        },
        {
            title: "Vị Trí",
            dataIndex: "position",
            key: "position"
        },
        {
            title: "Ngày Vào Công Ty",
            dataIndex: "date",
            key: "date"
        },
        {
            title: "Trạng Thái",
            key: "status",
            dataIndex: "status",
            render: (status: string[]) => (
                <>
                    {status.map(tag => {
                        let color = "success"
                        switch (tag) {
                            case "Onboarding": {
                                color = "success"
                                break
                            }
                            case "Waiting": {
                                color = "yellow"
                                break
                            }
                            case "Retired": {
                                color = "red"
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
            children: (
                <>
                    <div className="input-search input-search-cus">
                        <InputCustom
                            typeInput="search"
                            placeholder="Tìm kiếm"
                        />
                        <Button
                            className="btn-filter"
                            onClick={() => setModalOpen(true)}
                        >
                            <img src={IconFilterR} alt="icon" />
                            Filters
                        </Button>
                    </div>
                    <TableCustom columns={columns} dataSource={dataSource} />
                    <Button
                        id="btn-add"
                        className="btn-add"
                        onClick={() => showAddUser()}
                    >
                        +
                    </Button>
                </>
            )
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
            <ModalCustom
                open={modalOpen}
                maskClosable={true}
                handleCancel={() => setModalOpen(false)}
                className={styles.popupFilter}
                title={
                    <>
                        <img src={IconFilter} alt="icon" />
                        FILTERS
                    </>
                }
            >
                <Form
                    className="form-cus"
                    name="form-filter"
                    form={form}
                    preserve
                    scrollToFirstError={true}
                >
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item label="Bộ Phận" name="department">
                                <SelectCustom
                                    options={listSelectDepartment}
                                    fieldNames={{
                                        label: "Bộ Phận",
                                        value: "value",
                                        placeholder: "Bộ Phận"
                                    }}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Vị trí"
                                name="position"
                                className="label-r"
                            >
                                <SelectCustom
                                    options={listSelectPosition}
                                    fieldNames={{
                                        label: "Vị trí",
                                        value: "value",
                                        placeholder: "Vị trí"
                                    }}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={24}>
                            <Form.Item label="Status" name="status">
                                <Select
                                    mode="multiple"
                                    style={{ width: "100%" }}
                                    placeholder="select one country"
                                    defaultValue={[
                                        "onboarding",
                                        "waiting",
                                        "retired"
                                    ]}
                                    onChange={handleChange}
                                    optionLabelProp="label"
                                >
                                    <Option
                                        value="onboarding"
                                        label="Onboarding"
                                    >
                                        <Space>Onboarding</Space>
                                    </Option>
                                    <Option value="waiting" label="Waiting">
                                        <Space>Waiting</Space>
                                    </Option>
                                    <Option value="retired" label="Retired">
                                        <Space>Retired</Space>
                                    </Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item label="Ngày Vào Công Ty" name="validDay">
                        <Row gutter={20}>
                            <Col span={12}>
                                <DatePickerCustom
                                    format="DD/MM/YYYY"
                                    placeholder="dd/mm/yyyy"
                                    disabledDate={d =>
                                        d.isBefore(
                                            moment().format("YYYY-MM-DD")
                                        )
                                    }
                                />
                            </Col>
                            <Col span={12} className="text-right">
                                <DatePickerCustom
                                    format="DD/MM/YYYY"
                                    placeholder="dd/mm/yyyy"
                                    disabledDate={d =>
                                        d.isBefore(
                                            moment().format("YYYY-MM-DD")
                                        )
                                    }
                                />
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item label="Ngày Nghỉ Việc" name="validDay">
                        <Row gutter={20}>
                            <Col span={12}>
                                <DatePickerCustom
                                    format="DD/MM/YYYY"
                                    placeholder="dd/mm/yyyy"
                                    disabledDate={d =>
                                        d.isBefore(
                                            moment().format("YYYY-MM-DD")
                                        )
                                    }
                                />
                            </Col>
                            <Col span={12} className="text-right">
                                <DatePickerCustom
                                    format="DD/MM/YYYY"
                                    placeholder="dd/mm/yyyy"
                                    disabledDate={d =>
                                        d.isBefore(
                                            moment().format("YYYY-MM-DD")
                                        )
                                    }
                                />
                            </Col>
                        </Row>
                    </Form.Item>
                    <div className="form-cus_btn">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="btn-submit"
                        >
                            Tìm kiếm
                        </Button>
                    </div>
                </Form>
            </ModalCustom>
            <div className="user-btn" id="user">
                <PopupCustom
                    className="user-btn_item add"
                    textButton="Add"
                    titleModal="Thêm Nhân Viên"
                >
                    <CreateUser />
                </PopupCustom>
                <Button className="user-btn_item csv">CSV</Button>
            </div>
        </div>
    )
}

export default User
