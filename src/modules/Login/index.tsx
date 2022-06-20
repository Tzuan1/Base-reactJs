import React, { useEffect, useState } from "react"
import styles1221 from "./styles.scss"
import { Form, Button, Spin } from "antd"
import InputCustom from "@/components/InputCustom"
import {
    keyStorage,
    roleAccount,
    rulePasswordLogin,
    ruleUserNameLogin,
    statusCode,
    typeInputCustom,
    typeNotification
} from "@/shared/constants"
import { clearStorage, setDataStorage } from "@/shared"
import LoginService from "./services/api"
import { ILogin } from "@/modules/Login/typings/login-type"
import { useHistory } from "react-router-dom"
import { ImageLogo } from "@/components/ImageLogo"
import { useTranslation } from "react-i18next"
import { NotificationCustom } from "@/shared/function"

export default function Login() {
    const [formInstant] = Form.useForm()
    const [isLoading, setLoading] = useState(false)
    const router = useHistory()
    const { t } = useTranslation()

    useEffect(() => {
        clearStorage()
        return () => {
            setLoading(false)
        }
    }, [])

    const onFinish = async (val: ILogin) => {
        try {
            let dataLogin: ILogin = val
            if (router.location.pathname === "/staff/login") {
                dataLogin = {
                    ...val,
                    isKousi: true
                }
            }
            setLoading(true)
            const resForm = await LoginService.apiLogin(dataLogin)
            const { status, data } = resForm
            if (status === statusCode.ok) {
                setDataStorage(keyStorage.assetToken, data.access_token)
                setDataStorage(keyStorage.role, data.memberType)
                if (data.memberType === roleAccount.seito) {
                    setDataStorage(
                        keyStorage.profile,
                        JSON.stringify({
                            userName: data.seitoName,
                            userNo: data.seitoNo,
                            u_id: data.u_id
                        })
                    )
                } else {
                    setDataStorage(
                        keyStorage.profile,
                        JSON.stringify({
                            userName: data.kousiName,
                            userNo: data.kousiNo,
                            u_id: data.u_id
                        })
                    )
                }

                NotificationCustom({
                    type: typeNotification.success,
                    message: "ログイン成功です。"
                })
                // if (data.memberType === roleAccount.admin) {
                //     router.push("/messenger")
                //     return
                // }
                // router.push("/")
                window.location.href = "/"
            }
            if (status === statusCode.bad_request) {
                NotificationCustom({
                    type: typeNotification.error,
                    message: data.message
                })
                if (data.count_login < 6 && !data.isActive) {
                    NotificationCustom({
                        type: typeNotification.warning,
                        message:
                            "残り" +
                            data.count_login +
                            "回まで間違えることができます!"
                    })
                }
            }
        } catch (error) {
            // console.log("err", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Spin spinning={isLoading} wrapperClassName={styles1221.spinLogin}>
            <div className={styles1221.loginPage}>
                <div className={styles1221.formLogin}>
                    <ImageLogo width="30%" />
                    <Form
                        onFinish={onFinish}
                        form={formInstant}
                        scrollToFirstError
                        preserve
                    >
                        <InputCustom
                            classCustomLabel={styles1221.customInputLabel}
                            title={t("i18n_user_login")}
                            name="u_id"
                            form={formInstant}
                            rules={ruleUserNameLogin}
                        />
                        <InputCustom
                            classCustomLabel={styles1221.customInputLabel}
                            form={formInstant}
                            title={t("i18n_pass_login")}
                            name="password"
                            rules={rulePasswordLogin}
                            typeInput={typeInputCustom.password}
                        />
                        <div>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                {t("i18n_login")}
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Spin>
    )
}
