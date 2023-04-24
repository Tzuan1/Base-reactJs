import React from "react"

// components
import InputCustom from "@/components/InputCustom"

import { Button, Form } from "antd"

const ChangePassword = () => {
    const [form] = Form.useForm()
    return (
        <Form
            className="form-cus"
            name="form-filter"
            form={form}
            preserve
            scrollToFirstError={true}
        >
            <InputCustom
                title="Mật Khẩu Mới"
                typeInput="text"
                placeholder="Nhập password"
            />
            <InputCustom
                title="Mật Khẩu Mới (Xác nhận)"
                typeInput="text"
                placeholder="Nhập password"
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
