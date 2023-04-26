import React from "react"

// components
import InputCustom from "@/components/InputCustom"

import { Button, Form } from "antd"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { userDetailTypes } from "../../redux/reduces"

const ChangePassword = () => {
    const dispatch = useDispatch()
    const userDetailData = useSelector(
        (state: RootStateOrAny) => state.userDetail.dataUser.data
    )

    const [form] = Form.useForm()
    return (
        <Form
            className="form-cus"
            name="form-filter"
            form={form}
            preserve
            scrollToFirstError={true}
            onFinish={e => {
                dispatch({
                    type: userDetailTypes.CHANGE_PASSWORD,
                    payload: {
                        id: userDetailData.id,
                        password: e.password,
                        confirm_password: e.confirmPassword
                    }
                })
            }}
        >
            <InputCustom
                name="password"
                title="Mật Khẩu Mới"
                typeInput="password"
                placeholder="Nhập password"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng nhập mật khẩu mới!"
                    },
                    {
                        min: 8,
                        message: "Mật khẩu phải dài ít nhất 8 ký tự!"
                    },
                    {
                        pattern:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                        message:
                            "Mật khẩu phải bao gồm ít nhất 1 ký tự chữ viết hoa, 1 ký tự số và không được chứa ký tự đặc biệt!"
                    }
                ]}
            />
            <InputCustom
                name="confirmPassword"
                title="Mật Khẩu Mới (Xác nhận)"
                typeInput="password"
                placeholder="Nhập password"
                rules={[
                    {
                        required: true,
                        message: "Vui lòng xác nhận mật khẩu mới!"
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject("Mật khẩu không trùng khớp!")
                        }
                    })
                ]}
            />
            <div className="form-cus_btn">
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Change Password
                </Button>
            </div>
        </Form>
    )
}

export default ChangePassword
