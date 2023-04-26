import React from "react"
import moment from "moment"

// components
import SelectCustom from "@/components/SelectCustom"
import DatePickerCustom from "@/components/DatePickerCustom"

import { Button, Form, Col, Row, Select, Space } from "antd"
import { RootStateOrAny, useSelector } from "react-redux"

const SearchFilter = () => {
    // const dispatch = useDispatch()
    const [form] = Form.useForm()

    const listDepartmentAndPosition = useSelector(
        (state: RootStateOrAny) => state.departmentAndPosition
    )
    const listSelectDepartment =
        listDepartmentAndPosition.listDepartment.listDepartment
    const listSelectPosition =
        listDepartmentAndPosition.ListPosition.ListPosition

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`)
    }
    const { Option } = Select

    return (
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
                            defaultValue={["onboarding", "waiting", "retired"]}
                            onChange={handleChange}
                            optionLabelProp="label"
                        >
                            <Option value="onboarding" label="Onboarding">
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
                                d.isBefore(moment().format("YYYY-MM-DD"))
                            }
                        />
                    </Col>
                    <Col span={12} className="text-right">
                        <DatePickerCustom
                            format="DD/MM/YYYY"
                            placeholder="dd/mm/yyyy"
                            disabledDate={d =>
                                d.isBefore(moment().format("YYYY-MM-DD"))
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
                                d.isBefore(moment().format("YYYY-MM-DD"))
                            }
                        />
                    </Col>
                    <Col span={12} className="text-right">
                        <DatePickerCustom
                            format="DD/MM/YYYY"
                            placeholder="dd/mm/yyyy"
                            disabledDate={d =>
                                d.isBefore(moment().format("YYYY-MM-DD"))
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
                    onClick={e => {
                        console.log("tuandz", e)
                    }}
                >
                    Tìm kiếm
                </Button>
            </div>
        </Form>
    )
}

export default SearchFilter
