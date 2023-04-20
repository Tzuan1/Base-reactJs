import ButtonCustom from "@/components/ButtonCustom"
import React, { useMemo, useState } from "react"
import styles from "./index.scss"

import DropdownCustom from "@/components/DropdownCustom"
import { Button, Form, MenuProps, Tag } from "antd"
import InputCustom from "@/components/InputCustom"

import { typeInputCustom } from "@/shared/constants"
import PopupCustom from "@/components/PopupCustom"
import TableCustom from "@/components/TableCustom"
import type { ColumnsType } from "antd/es/table"
import RangePicker from "@/components/RangePickerCustom"

const TestComponents = () => {
    const [valueRadio, setValueRadio] = useState(1)

    const items: MenuProps["items"] = [
        {
            label: <a href="">1st menu item</a>,
            key: "0"
        },
        {
            label: <a href="">2nd menu item</a>,
            key: "1"
        },
        {
            type: "divider"
        },
        {
            label: "3rd menu item",
            key: "3"
        }
    ]

    const itemsRadio: Object[] = [
        {
            value: 1,
            label: "A"
        },
        {
            value: 2,
            label: "B"
        },
        {
            value: 3,
            label: "C"
        }
    ]

    const itemsSelect: Object[] = [
        {
            value: "jack",
            label: "Jack"
        },
        {
            value: "lucy",
            label: "Lucy"
        },
        {
            value: "Yiminghe",
            label: "yiminghe"
        }
    ]

    const onFinish = values => {
        console.log(values)
    }

    interface DataType {
        key: string
        Stt?: Number
        name?: string
        gioitinh?: string
        age?: number
        address?: string
        chucvu?: string
        ghichu?: string[]
        tags?: string[]
    }

    const columnsHeader: ColumnsType<DataType> = useMemo(
        () => [
            {
                title: "Stt",
                dataIndex: "Stt",
                key: "Stt",
                render: text => <a>{text}</a>
            },
            {
                title: "HoVaTen",
                dataIndex: "name",
                key: "name"
            },
            {
                title: "GioiTinh",
                dataIndex: "gioitinh",
                key: "gioitinh"
            },
            {
                title: "ChucVu",
                dataIndex: "chucvu",
                key: "chucvu"
            },
            {
                title: "GhiChu",
                dataIndex: "ghichu",
                key: "ghichu",
                render: (_, { ghichu }) => (
                    <>
                        {ghichu?.map(ghichu => {
                            let color = ghichu.length > 5 ? "geekblue" : "green"
                            if (ghichu === "XinhGai") {
                                color = "volcano"
                            }
                            if (ghichu === "Deptrai") {
                                color = "green"
                            }
                            if (ghichu === "Giau") {
                                color = "gold"
                            }
                            if (ghichu === "Cute") {
                                color = "cyan"
                            }
                            return (
                                <Tag color={color} key={ghichu}>
                                    {ghichu.toUpperCase()}
                                </Tag>
                            )
                        })}
                    </>
                )
            }
        ],
        []
    )

    const convertTableList: DataType[] = [
        {
            key: "1",
            Stt: 1,
            name: "NguyenVanTuan",
            gioitinh: "Nam",
            chucvu: "Develop",
            ghichu: ["Deptrai"]
        },
        {
            key: "2",
            Stt: 2,
            name: "NguyenThiVan",
            gioitinh: "Nu",
            chucvu: "Develop",
            ghichu: ["XinhGai"]
        },
        {
            key: "3",
            Stt: 3,
            name: "DinhKhacTung",
            gioitinh: "Nam",
            chucvu: "Develop",
            ghichu: ["Cute"]
        },
        {
            key: "4",
            Stt: 4,
            name: "NguyenMinhTue",
            gioitinh: "Nam",
            chucvu: "Develop",
            ghichu: ["Giau"]
        }
    ]

    return (
        <div className={styles.TestComponents}>
            <h1>Test Components</h1>

            <div className="button-custom">
                <h2>button-custom</h2>

                <ButtonCustom
                    text="Button"
                    type="primary"
                    onClick={() => alert("hehe")}
                />
            </div>

            <div className="dropdown-custom">
                <h2>dropdown-custom</h2>
                <DropdownCustom
                    titleDropdown="Dropdown Custom"
                    menuDropdown={{ items }}
                />
            </div>

            <div className="input-custom">
                <h2>input-custom</h2>
                <InputCustom
                    title="input defauld"
                    placeholder="input defauld"
                />

                <InputCustom
                    title="input date"
                    typeInput={typeInputCustom.date}
                />

                <InputCustom
                    title="input radio"
                    typeInput={typeInputCustom.radio}
                    listDataRadio={itemsRadio}
                    valChecked={valueRadio}
                    onChangeRadio={(e: any) => {
                        console.log("radio checked", e.target.value)
                        setValueRadio(e.target.value)
                    }}
                />
                <InputCustom
                    title="input select"
                    typeInput={typeInputCustom.select}
                    listDataSelect={itemsSelect}
                    valSelect={itemsSelect[1]}
                />
                <InputCustom
                    title="input textarea"
                    typeInput={typeInputCustom.textarea}
                    placeholder="input textarea"
                />

                <InputCustom
                    title="input password"
                    typeInput={typeInputCustom.password}
                    placeholder="input password"
                />
            </div>

            <div className="input-range-picker">
                <h2>input-range-picker</h2>
                <RangePicker />
            </div>

            <div className="popup-common">
                <h2>popup-common</h2>
                <PopupCustom
                    className="user-btn_item add"
                    textButton="Add"
                    titleModal="Thêm Nhân Viên"
                >
                    <Form
                        onFinish={e => onFinish(e)}
                        initialValues={{ remember: true }}
                    >
                        <Form.Item label="Name">
                            <InputCustom
                                name="name"
                                placeholder="input defauld"
                            />
                        </Form.Item>
                        <Form.Item label="Email">
                            <InputCustom
                                name="email"
                                typeInput={typeInputCustom.password}
                                placeholder="input password"
                            />
                        </Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form>
                </PopupCustom>
            </div>

            <div className="table-custom">
                <h2>table-custom</h2>
                <TableCustom
                    columns={columnsHeader}
                    dataSource={convertTableList}
                />
            </div>
        </div>
    )
}

export default TestComponents
