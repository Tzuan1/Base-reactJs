import React, { useMemo } from "react"
import moment from "moment"

// components
import SelectCustom from "@/components/SelectCustom"
import DatePickerCustom from "@/components/DatePickerCustom"
import InputCustom from "@/components/InputCustom"
import InputTextArea from "@/components/InputTextArea"

import { Button, Form, Col, Row } from "antd"

const CreateUser = () => {
    const [form] = Form.useForm()
    const listSelectDepartment = useMemo(() => {
        return [
            {
                value: "D1",
                name: "D1"
            },
            {
                value: "D2",
                name: "D2"
            }
        ]
    }, [])
    const listSelectPosition = useMemo(() => {
        return [
            {
                value: "SE",
                name: "SE"
            },
            {
                value: "PM",
                name: "PM"
            },
            {
                value: "BRSE",
                name: "BRSE"
            }
        ]
    }, [])
    const listSelectLevel = useMemo(() => {
        return [
            {
                value: "Fresher",
                name: "Fresher"
            },
            {
                value: "Junior",
                name: "Junior"
            },
            {
                value: "Senior",
                name: "Senior"
            }
        ]
    }, [])
    const listSelectGender = useMemo(() => {
        return [
            {
                value: "Male",
                name: "Male"
            },
            {
                value: "Female",
                name: "Female"
            }
        ]
    }, [])
    return (
        <Form
            className="form-cus"
            name="form-filter"
            form={form}
            preserve
            scrollToFirstError={true}
        >
            <InputCustom title="Họ Tên" typeInput="text" placeholder="Họ Tên" />
            <Row gutter={20}>
                <Col span={12}>
                    <InputCustom
                        title="Email"
                        typeInput="text"
                        placeholder="Email"
                    />
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Bộ Phận"
                        name="department"
                        className="label-r"
                    >
                        <SelectCustom
                            options={listSelectDepartment}
                            fieldNames={{
                                label: "Bộ phận",
                                value: "value",
                                placeholder: "Bộ phận"
                            }}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={12}>
                    <Form.Item label="Vị trí" name="position">
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
                <Col span={12}>
                    <Form.Item label="Level" name="level" className="label-r">
                        <SelectCustom
                            options={listSelectLevel}
                            fieldNames={{
                                label: "Level",
                                value: "value",
                                placeholder: "Level"
                            }}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={12}>
                    <Form.Item label="Ngày Vào Công Ty" name="validDay">
                        <DatePickerCustom
                            format="DD/MM/YYYY"
                            placeholder="dd/mm/yyyy"
                            disabledDate={d =>
                                d.isBefore(moment().format("YYYY-MM-DD"))
                            }
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Giới Tính"
                        name="gender"
                        className="label-r"
                    >
                        <SelectCustom
                            options={listSelectGender}
                            fieldNames={{
                                label: "Giới Tính",
                                value: "value",
                                placeholder: "Giới Tính"
                            }}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={24}>
                    <Form.Item
                        label="Ghi Chú"
                        name="note"
                        className="textarea-cus"
                    >
                        <InputTextArea typeInput="text" />
                    </Form.Item>
                </Col>
            </Row>
            <div className="form-cus_btn">
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Save
                </Button>
            </div>
        </Form>
    )
}

export default CreateUser
