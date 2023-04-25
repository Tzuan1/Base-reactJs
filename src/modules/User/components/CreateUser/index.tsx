import React from "react"
import moment from "moment"

// components
import SelectCustom from "@/components/SelectCustom"
import DatePickerCustom from "@/components/DatePickerCustom"
import InputCustom from "@/components/InputCustom"

import { Button, Form, Col, Row } from "antd"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { listUserTypes } from "../../redux/reduces"
import { listSelectGender, listSelectLevel } from "../../shared/constants"

const CreateUser = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm()

    const listDepartmentAndPosition = useSelector(
        (state: RootStateOrAny) => state.departmentAndPosition
    )
    const listSelectDepartment =
        listDepartmentAndPosition.listDepartment.listDepartment
    const listSelectPosition =
        listDepartmentAndPosition.ListPosition.ListPosition

    return (
        <Form
            className="form-cus"
            name="form-filter"
            form={form}
            preserve
            scrollToFirstError={true}
            onFinish={value => {
                dispatch({
                    type: listUserTypes.CREATE_USER,
                    payload: {
                        full_name: value.fullName,
                        email: value.email,
                        department_id: value.department,
                        position_id: value.position,
                        level: value.level,
                        start_date: moment(value.validay).format("YYYY-MM-DD"),
                        gender: value.gender,
                        descriptions: value.note
                    }
                })
            }}
        >
            <InputCustom
                title="Họ Tên"
                name="fullName"
                typeInput="text"
                placeholder="Họ Tên"
            />
            <Row gutter={20}>
                <Col span={12}>
                    <InputCustom
                        title="Email"
                        name="email"
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
                        <SelectCustom options={listSelectDepartment} />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={12}>
                    <Form.Item label="Vị trí" name="position">
                        <SelectCustom options={listSelectPosition} />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item label="Level" name="level" className="label-r">
                        <SelectCustom options={listSelectLevel} />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={12}>
                    <Form.Item label="Ngày Vào Công Ty" name="validDay">
                        <DatePickerCustom
                            format="DD/MM/YYYY"
                            placeholder="dd/mm/yyyy"
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Giới Tính"
                        name="gender"
                        className="label-r"
                    >
                        <SelectCustom options={listSelectGender} />
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

export default CreateUser
