import React, { useState, useEffect, useCallback, useMemo, lazy } from "react"
import moment from "moment"
// css
import styles from "./index.scss"

//img
import IconFilterR from "@/assets/icons/filter-regular.png"
import IconFilter from "@/assets/icons/filter-bold.png"

// components
import TableCustom from "@/components/TableCustom"
import CreateUser from "./components/CreateUser"
import TabsCustom from "@/components/TabsCustom"
import InputCustom from "@/components/InputCustom"
import ModalCustom from "@/components/ModalCustom"
import SelectCustom from "@/components/SelectCustom"
import DatePickerCustom from "@/components/DatePickerCustom"

import { Button, Form, Col, Row, Select, Space } from "antd"
import PopupCustom from "@/components/PopupCustom"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { listUserTypes } from "./redux/reduces"
import {
    keyUserTab,
    listSelectDepartment,
    listSelectPosition,
    statusWorkUser
} from "./shared/constants"
import { useHistory } from "react-router"
import { PATH_ROUTES } from "@/shared/routerConfig/PathRoutes"
import { getQueryLocation } from "@/shared/function"
const Dashboard = lazy(() => import("@/modules/User/components/Dashboard"))

// type
type ITypeTabs = {
    key?: number
    label?: string
    children?: string
    count?: number
    items?: any
}

const User = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { Option } = Select
    const [form] = Form.useForm()

    const dataListUser = useSelector((state: RootStateOrAny) => state.listUser)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const count = 10
    const pagination = {
        current: dataListUser.pageIndex,
        pageSize: dataListUser.listUser.data?.per_page,
        total: dataListUser.listUser.data?.total
    }

    const [dataSource, setDataSource] = useState<any>()

    useEffect(() => {
        dispatch({
            type: listUserTypes.GET_LIST_USER,
            payload: {
                status: 0,
                pageIndex: 1
            }
        })
    }, [])

    useEffect(() => {
        const listUsers = dataListUser.listUser.data?.data
        setDataSource(
            listUsers?.map((user, index) => {
                return {
                    key: index,
                    id: user.code,
                    name: user.full_name,
                    email: user.email,
                    department: user.department.name,
                    position: user.position.name,
                    date: user.start_date,
                    status: checkStatusUser(user.status)
                }
            })
        )
    }, [dataListUser])

    const onChangePagination = numberPage => {
        dispatch({
            type: listUserTypes.GET_LIST_USER,
            payload: {
                status: dataListUser.status,
                pageIndex: numberPage
            }
        })
    }

    const onChangeTab = (key: string) => {
        history.push({
            pathname: PATH_ROUTES.USER,
            search: `?tab=${key}`
        })

        dispatch({
            type: listUserTypes.GET_LIST_USER,
            payload: {
                status: checkTagsUser(key),
                pageIndex: 1
            }
        })
    }

    const checkTagsValue = (value: string) => {
        const values = Object.values(keyUserTab)
        for (let i = 0; i < values.length; i++) {
            if (values[i] === value) {
                return value
            }
        }
        return values[0]
    }

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`)
    }
    const showAddUser = () => {
        document.getElementById("user")?.classList.toggle("active")
        document.getElementById("btn-add")?.classList.toggle("active")
    }
    // const listSelectDepartment = useMemo(() => {})

    const checkStatusUser = useCallback((status: number) => {
        switch (status) {
            case statusWorkUser.Onboarding: {
                return keyUserTab.Onboarding
            }
            case statusWorkUser.Waiting: {
                return keyUserTab.Waiting
            }
            case statusWorkUser.Retired: {
                return keyUserTab.Retired
            }
            default:
                return ""
        }
    }, [])
    const checkTagsUser = useCallback((status: string) => {
        switch (status) {
            case keyUserTab.Dashboard: {
                return statusWorkUser.All
            }
            case keyUserTab.All: {
                return statusWorkUser.All
            }
            case keyUserTab.Onboarding: {
                return statusWorkUser.Onboarding
            }
            case keyUserTab.Waiting: {
                return statusWorkUser.Waiting
            }
            case keyUserTab.Retired: {
                return statusWorkUser.Retired
            }
            default:
                return statusWorkUser.All
        }
    }, [])

    const getColorStatus = useCallback(status => {
        let color = "success"
        switch (status) {
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
                {status}
            </Button>
        )
    }, [])

    const columns = useMemo(() => {
        return [
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
                render: (status: string) => <>{getColorStatus(status)}</>
            }
        ]
    }, [])
    const items: ITypeTabs["items"] = [
        {
            key: keyUserTab.Dashboard,
            label: <p>Dashboard</p>,
            children: <Dashboard />
        },
        {
            key: keyUserTab.All,
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
                    <TableCustom
                        columns={columns}
                        dataSource={dataSource}
                        pagination={{
                            ...pagination,
                            onChange: onChangePagination
                        }}
                    />
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
            key: keyUserTab.Onboarding,
            label: (
                <p>
                    Đang Làm Việc <span className="count">{count}</span>
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
                    <TableCustom
                        columns={columns}
                        dataSource={dataSource}
                        pagination={{
                            ...pagination,
                            onChange: onChangePagination
                        }}
                    />
                    <Button className="btn-add">+</Button>
                </>
            )
        },
        {
            key: keyUserTab.Waiting,
            label: (
                <p>
                    Đã Nghỉ Việc <span className="count">{count}</span>
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
                    <TableCustom
                        columns={columns}
                        dataSource={dataSource}
                        pagination={{
                            ...pagination,
                            onChange: onChangePagination
                        }}
                    />
                    <Button className="btn-add">+</Button>
                </>
            )
        },
        {
            key: keyUserTab.Retired,
            label: (
                <p>
                    Chờ Nhận Việc <span className="count">{count}</span>
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
                    <TableCustom
                        columns={columns}
                        dataSource={dataSource}
                        pagination={{
                            ...pagination,
                            onChange: onChangePagination
                        }}
                    />
                    <Button className="btn-add">+</Button>
                </>
            )
        }
    ]

    return (
        <div className={styles.user}>
            <TabsCustom
                defaultActiveKey={checkTagsValue(
                    getQueryLocation("tab") || keyUserTab.Dashboard
                )}
                items={items}
                onChange={onChangeTab}
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
                            onClick={() => {
                                console.log("tuandz")
                            }}
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
