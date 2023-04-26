import React, { useMemo } from "react"
import moment from "moment"

// components
import SelectCustom from "@/components/SelectCustom"
import DatePickerCustom from "@/components/DatePickerCustom"
import InputCustom from "@/components/InputCustom"

import { Button, Form, Col, Row } from "antd"

const EditUser = () => {
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
    const listSelectStatus = useMemo(() => {
        return [
            {
                value: "Onboarding",
                name: "Onboarding"
            },
            {
                value: "Waiting",
                name: "Waiting"
            },
            {
                value: "Retired",
                name: "Retired"
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
            <Row gutter={20}>
                <Col span={8}>
                    <InputCustom
                        title="Mã NV"
                        typeInput="text"
                        placeholder="Mã nhân viên"
                    />
                </Col>
                <Col span={16}>
                    <div className="label-r">
                        <InputCustom
                            title="Họ Tên"
                            typeInput="text"
                            placeholder="Họ Tên"
                        />
                    </div>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={8}>
                    <Form.Item label="Giới Tính" name="gender">
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
                <Col span={16}>
                    <div className="label-r">
                        <InputCustom
                            title="Email"
                            typeInput="text"
                            placeholder="Email"
                        />
                    </div>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={8}>
                    <Form.Item label="Bộ Phận" name="department">
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
                <Col span={8}>
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
                <Col span={8}>
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
                        label="Chính Thức"
                        name="validDay"
                        className="label-r"
                    >
                        <DatePickerCustom
                            format="DD/MM/YYYY"
                            placeholder="dd/mm/yyyy"
                            disabledDate={d =>
                                d.isBefore(moment().format("YYYY-MM-DD"))
                            }
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={12}>
                    <Form.Item
                        label="Status"
                        name="status"
                        className="select-status"
                    >
                        <SelectCustom
                            options={listSelectStatus}
                            fieldNames={{
                                label: "Status",
                                value: "value"
                            }}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Nghỉ Việc"
                        name="validDay"
                        className="label-r"
                    >
                        <DatePickerCustom
                            format="DD/MM/YYYY"
                            placeholder="dd/mm/yyyy"
                            disabledDate={d =>
                                d.isBefore(moment().format("YYYY-MM-DD"))
                            }
                        />
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

export default EditUser
