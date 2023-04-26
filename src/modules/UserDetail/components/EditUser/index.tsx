import React, { useEffect, useState } from "react"
import moment from "moment"

// components
import SelectCustom from "@/components/SelectCustom"
import DatePickerCustom from "@/components/DatePickerCustom"
import InputCustom from "@/components/InputCustom"

import { Button, Form, Col, Row } from "antd"
import { RootStateOrAny, useSelector } from "react-redux"
import {
    listSelectGender,
    listSelectLevel,
    listSelectStatus
} from "@/modules/User/shared/constants"

const EditUser = () => {
    const userDetailData = useSelector(
        (state: RootStateOrAny) => state.userDetail.dataUser.data
    )
    const listDepartmentAndPosition = useSelector(
        (state: RootStateOrAny) => state.departmentAndPosition
    )

    const listSelectDepartment =
        listDepartmentAndPosition.listDepartment.listDepartment
    const listSelectPosition =
        listDepartmentAndPosition.ListPosition.ListPosition

    const [ngayVao, setNgayVao] = useState<any>(null)
    const [ngayChinhThuc, setNgayChinhThuc] = useState<any>(null)
    const [ngayNghiViec, setNgayNghiViec] = useState<any>(null)

    const [defaultValue, setDefaultValue] = useState<any>()

    useEffect(() => {
        setNgayVao(moment(userDetailData?.start_date))
        setNgayChinhThuc(moment(userDetailData?.official_start_date))
        setNgayNghiViec(moment(userDetailData?.date_off))
        setDefaultValue({
            code: userDetailData?.code,
            full_name: userDetailData?.full_name,
            gender: userDetailData?.level,
            email: userDetailData?.email,
            department_id: userDetailData?.department.id,
            position_id: userDetailData?.position.id,
            level: userDetailData?.level,
            start_date: userDetailData?.start_date,
            officialStartDay: userDetailData?.official_start_date,
            status: userDetailData?.status,
            date_off: userDetailData?.date_off
        })
    }, [userDetailData])

    const disabledFirstDate = current => {
        if (ngayChinhThuc) {
            return current && current > ngayChinhThuc.startOf("day")
        }
        if (ngayNghiViec) {
            return current && current > ngayNghiViec
        }
        return false
    }

    const disabledStartDate = current => {
        if (ngayChinhThuc) {
            return (
                current &&
                (current < ngayChinhThuc.startOf("day") || current < ngayVao)
            )
        }
        return current < ngayVao
    }

    const disabledEndDate = current => {
        if (ngayNghiViec) {
            return (
                current &&
                (current > ngayNghiViec.endOf("day") || current < ngayVao)
            )
        }
        return current < ngayVao
    }

    const onFinish = onFinish => {
        const submit = { ...defaultValue, ...onFinish }
        Object.keys(submit).forEach(key => {
            if (submit[key] === undefined) {
                submit[key] = defaultValue[key]
            }
            if (submit[key] === null) {
                submit[key] = defaultValue[key]
            }
        })

        const newSubmit = {
            ...submit,
            start_date: moment(submit.start_date).format("YYYY-MM-DD"),
            officialStartDay: submit.officialStartDay
                ? submit.officialStartDay.format("YYYY-MM-DD")
                : null,
            date_off: submit.date_off
                ? submit.date_off.format("YYYY-MM-DD")
                : null
        }
        console.log("onFinish", newSubmit)
    }

    const [form] = Form.useForm()

    return (
        <Form
            className="form-cus"
            name="form-filter"
            form={form}
            preserve
            scrollToFirstError={true}
            onFinish={e => onFinish(e)}
        >
            <Row gutter={20}>
                <Col span={8}>
                    <InputCustom
                        defaultValue={userDetailData?.code}
                        title="Mã NV"
                        typeInput="text"
                        placeholder="Mã nhân viên"
                        disabled
                        name="code"
                    />
                </Col>
                <Col span={16}>
                    <div className="label-r">
                        <InputCustom
                            defaultValue={userDetailData?.full_name}
                            title="Họ Tên"
                            typeInput="text"
                            placeholder="Họ Tên"
                            name="full_name"
                        />
                    </div>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={8}>
                    <Form.Item label="Giới Tính" name="gender">
                        <SelectCustom
                            options={listSelectGender}
                            defaultValue={userDetailData?.level}
                        />
                    </Form.Item>
                </Col>
                <Col span={16}>
                    <div className="label-r">
                        <InputCustom
                            defaultValue={userDetailData?.email}
                            title="Email"
                            name="email"
                            typeInput="text"
                            placeholder="Email"
                        />
                    </div>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={8}>
                    <Form.Item label="Bộ Phận" name="department_id">
                        <SelectCustom
                            options={listSelectDepartment}
                            defaultValue={userDetailData?.department.id}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Vị trí"
                        name="position_id"
                        className="label-r"
                    >
                        <SelectCustom
                            options={listSelectPosition}
                            defaultValue={userDetailData?.position.id}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Level" name="level" className="label-r">
                        <SelectCustom
                            options={listSelectLevel}
                            defaultValue={userDetailData?.level}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={20}>
                <Col span={12}>
                    <Form.Item label="Ngày Vào Công Ty" name="start_date">
                        <DatePickerCustom
                            format="DD/MM/YYYY"
                            placeholder="dd/mm/yyyy"
                            value={ngayVao}
                            onChange={e => setNgayVao(e)}
                            disabledDate={disabledFirstDate}
                            defaultValue={
                                userDetailData?.start_date
                                    ? moment(userDetailData?.start_date)
                                    : undefined
                            }
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Chính Thức"
                        name="officialStartDay"
                        className="label-r"
                    >
                        <DatePickerCustom
                            format="DD/MM/YYYY"
                            placeholder="dd/mm/yyyy"
                            value={ngayChinhThuc}
                            onChange={date => setNgayChinhThuc(date)}
                            disabledDate={disabledEndDate}
                            defaultValue={
                                userDetailData?.official_start_date
                                    ? moment(
                                          userDetailData?.official_start_date
                                      )
                                    : undefined
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
                            defaultValue={userDetailData?.status}
                            options={listSelectStatus}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Nghỉ Việc"
                        name="date_off"
                        className="label-r"
                    >
                        <DatePickerCustom
                            format="DD/MM/YYYY"
                            placeholder="dd/mm/yyyy"
                            value={ngayNghiViec}
                            onChange={date => {
                                setNgayNghiViec(date)
                            }}
                            disabledDate={disabledStartDate}
                            defaultValue={
                                userDetailData?.date_off
                                    ? moment(userDetailData?.date_off)
                                    : undefined
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
