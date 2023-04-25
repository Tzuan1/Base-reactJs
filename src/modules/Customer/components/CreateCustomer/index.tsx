import React, { useMemo } from "react"

// components
import SelectCustom from "@/components/SelectCustom"
import InputCustom from "@/components/InputCustom"

import { Button, Form, Col, Row } from "antd"

const CreateCustomer = () => {
    const [form] = Form.useForm()
    const listSelectType = useMemo(() => {
        return [
            {
                value: "SI",
                name: "1"
            },
            {
                value: "EU",
                name: "2"
            }
        ]
    }, [])
    const listSelectLevel = useMemo(() => {
        return [
            {
                value: "VIP",
                name: "1"
            },
            {
                value: "V-VIP",
                name: "2"
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
            onFinish={value => {}}
        >
            <Row gutter={20}>
                <Col span={12}>
                    <InputCustom
                        title="Customer No"
                        name="id"
                        typeInput="text"
                        placeholder="Customer No"
                    />
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={12}>
                    <InputCustom
                        title="Customer Name"
                        name="fullName"
                        typeInput="text"
                        placeholder="Customer Name"
                    />
                </Col>
                <Col span={12}>
                    <div className="label-r">
                        <InputCustom
                            title="Customer Name (JP)"
                            name="fullNameJp"
                            typeInput="text"
                            placeholder="Customer Name (JP)"
                        />
                    </div>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={12}>
                    <Form.Item label="Customer Type" name="type">
                        <SelectCustom options={listSelectType} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Customer Level"
                        name="level"
                        className="label-r"
                    >
                        <SelectCustom options={listSelectLevel} />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={24}>
                    <InputCustom
                        title="Ghi Chú"
                        name="note"
                        typeInput="textarea"
                        classNameFormItem="textarea-cus"
                    />
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

export default CreateCustomer
