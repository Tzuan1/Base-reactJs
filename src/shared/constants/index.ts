import ChatActiveIconPng from "@/assets/image/icon-chat-active.png"
import ChatIconPng from "@/assets/image/icon-chat.png"
import ReservationActiveIconPng from "@/assets/image/icon-reservation-active.png"
import ReservationIconPng from "@/assets/image/icon-reservation.png"
import WriteActiveIconPng from "@/assets/image/icon-write-active.png"
import WriteIconPng from "@/assets/image/icon-write.png"
import { regex } from "@/shared/regex"
import i18next from "i18next"
import moment from "moment-timezone"
import {
    IKeyStorage,
    IKeyTypeScreen,
    IStatusCode,
    ITypeDataLogin,
    ITypeInput,
    ITypeListMenuTopPage,
    ITypeListPopup,
    ITypeNotification,
    ITypeOptionMenuHeader,
    ITypePermissionRouteUser,
    ITypeRoleUser
} from "./IContants"

const keyStorage: IKeyStorage = {
    profile: "profile",
    assetToken: "assetToken",
    typeScreen: "typeScreen",
    role: "role"
}

const typeInputCustom: ITypeInput = {
    checkbox: "checkbox",
    date: "date",
    image: "image",
    text: "text",
    radio: "radio",
    select: "select",
    textarea: "textarea",
    number: "number",
    password: "password",
    search: "search"
}

const typeNotification: ITypeNotification = {
    success: "success",
    error: "error",
    info: "info",
    warning: "warning"
}

const keyTypeScreenLogin: IKeyTypeScreen = {
    admin: "admin",
    career: "career",
    adminFqa: "admin-fqa",
    provider: "provider",
    agency: "agency"
}

const typeScreenLogin: ITypeDataLogin[] = [
    {
        // admin system
        type: "adminSystem",
        key: keyTypeScreenLogin.admin,
        title: "管理者ログイン",
        role: "SUPER_ADMIN",
        status: 1
    },
    {
        // career system
        type: "careerSystem",
        key: keyTypeScreenLogin.career,
        title: "キャリアコンサルタントログイン",
        role: "ADMIN_CONSULTING",
        status: 3
    },
    {
        // qa system
        type: "qaSystem",
        title: "問合せ担当者ログイン",
        key: keyTypeScreenLogin.adminFqa,
        role: "ADMIN_FQA",
        status: 2
    },
    {
        // provider system
        type: "providerSystem",
        title: "事業者ログイン",
        key: keyTypeScreenLogin.provider,
        role: "PROVIDER",
        status: 4
    },
    {
        // tax account system
        type: "agencySystem",
        title: "税理士ログイン",
        key: keyTypeScreenLogin.agency,
        role: "AGENCY",
        status: 5
    }
]

const rulePasswordLogin = [
    {
        required: true,
        message: "パスワードを入力してください",
        validationTrigger: "onBlur"
    },
    () => ({
        validator(rule: any, value: any) {
            if (value && !regex.password.test(value)) {
                return Promise.reject(new Error(i18next.t("i18n_invalid_pass")))
            }
            if (value && value.length > 128) {
                return Promise.reject(
                    new Error(i18next.t("i18n_validate_pass_length"))
                )
            }
            return Promise.resolve()
        }
    })
]
//validate usernameLogin
const ruleUserNameLogin = [
    {
        required: true,
        message: "IDを入力してください",
        validationTrigger: "onBlur"
    },
    () => ({
        validator(rule: any, value: any) {
            if (value && !regex.user_name.test(value)) {
                return Promise.reject(
                    new Error(i18next.t("i18n_invalid_user_name_login"))
                )
            }
            if (value && value.length > 128) {
                return Promise.reject(
                    new Error(i18next.t("i18n_validate_user_length"))
                )
            }
            return Promise.resolve()
        }
    })
]

//validate form apply absent
const ruleApplyAbsent = [
    {
        required: true,
        message: "理由入力を入力してください",
        validationTrigger: "onBlur"
    },
    () => ({
        validator(rule: any, value: any) {
            if (value && regex.only_space.test(value)) {
                return Promise.reject(new Error(i18next.t("i18n_REASON_TEXT")))
            }
            const maxlength = 200
            if (value && value.length > maxlength) {
                return Promise.reject(
                    new Error(`${maxlength}文字以内で入力してください`)
                )
            }
            // if (value && regex.emoji.test(value)) {
            //     return Promise.reject(
            //         new Error(i18next.t("i18n_VALIDATE_EMOJI"))
            //     )
            // }
            return Promise.resolve()
        }
    })
]

//rule send message
const ruleSendMessage = [
    {
        required: false,
        message: "理由入力を入力してください",
        validationTrigger: "onBlur"
    },
    () => ({
        validator(rule: any, value: any) {
            const maxlength = 100
            if (value && value.length > maxlength) {
                return Promise.reject(
                    new Error(`${maxlength}文字以内で入力してください`)
                )
            }
            if (value && regex.only_space.test(value)) {
                return Promise.reject(new Error(`内容を入力してください`))
            }
            // if (value && regex.emoji.test(value)) {
            //     return Promise.reject(
            //         new Error(i18next.t("i18n_VALIDATE_EMOJI"))
            //     )
            // }
            return Promise.resolve()
        }
    })
]

const ruleInputMessageCreateContact = [
    {
        required: true,
        message: "理由入力を入力してください",
        validationTrigger: "onBlur"
    },
    () => ({
        validator(rule: any, value: any) {
            const maxlength = 100
            if (value && value.length > maxlength) {
                return Promise.reject(
                    new Error(`${maxlength}文字以内で入力してください`)
                )
            }
            if (value && regex.only_space.test(value)) {
                return Promise.reject(new Error(`内容を入力してください`))
            }
            // if (value && regex.emoji.test(value)) {
            //     return Promise.reject(
            //         new Error(i18next.t("i18n_VALIDATE_EMOJI"))
            //     )
            // }
            return Promise.resolve()
        }
    })
]

const ruleEmailLogin = [
    {
        required: true,
        message: "メールを入力してください"
    },
    {
        max: 128,
        message: "Password is too long (maximum is 128 characters)",
        validationTrigger: "onKeyUp"
    },
    () => ({
        validator(rule: any, value: any) {
            if (value && value.length > 245) {
                return Promise.reject(
                    new Error("Email is too long (maximum is 245 characters)")
                )
            }

            if (value && !regex.email.test(value)) {
                return Promise.reject(
                    new Error(
                        "メール が無効です。○○○.gmail.comのように入力してください"
                    )
                )
            }
            return Promise.resolve()
        }
    })
]

const statusCode: IStatusCode = {
    ok: 200,
    created: 201,
    bad_request: 400,
    expired_token: 401,
    not_found: 404,
    method_not_allowed: 405,
    not_accept: 406,
    error_server: 500
}

const listKeyCodeNumber: any[] = [
    undefined,
    8,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105
]

const YYYYMMDD: string = "YYYY-MM-DD"
const YYYYMMDDTHHmmssSSST: string = "YYYY-MM-DDTHH:mm:ss.SSSZ"

const listNamePopup: ITypeListPopup = {
    popupCreateMessageContact: "popupCreateMessageContact",
    popupClassReportDetail: "popupClassReportDetail"
}

const roleAccount: ITypeRoleUser = {
    admin: "admin",
    kousi: "kousi",
    seito: "seito"
}

const permissionRouterUser: ITypePermissionRouteUser[] = [
    {
        type: "admin",
        homePage: "/messenger"
    },
    {
        type: "kousi",
        homePage: "/"
    },
    {
        type: "seito",
        homePage: "/"
    }
]

const listMenu: ITypeListMenuTopPage[] = [
    {
        id: 0,
        href: "/plan-calendar",
        title: "授業予定",
        icon: ReservationIconPng,
        iconActive: ReservationActiveIconPng,
        isShow: [roleAccount.seito]
    },
    {
        id: 1,
        href: "/booking",
        title: "授業予約",
        icon: WriteIconPng,
        iconActive: WriteActiveIconPng,
        isShow: [roleAccount.seito]
    },
    {
        id: 2,
        href: "/messenger",
        title: "メッセージ",
        icon: ChatIconPng,
        iconActive: ChatActiveIconPng,
        isShow: [roleAccount.admin, roleAccount.kousi, roleAccount.seito]
    }
]

const maxWidthResponsive: number = 992
const screenWidth = window.screen.width

const listOptionMenuHeader = (role): ITypeOptionMenuHeader[] => {
    return [
        {
            href: "/tuition",
            title: "料金明細",
            isShow: [roleAccount.seito],
            backgroundColor: "#1FE26D"
        },
        {
            href: "/attendance_hist",
            title: "登下校履歴",
            isShow: [roleAccount.seito],
            backgroundColor: "#FFBA0A"
        },
        {
            href: "/class-report",
            title: "授業報告",
            isShow: [roleAccount.seito],
            backgroundColor: "#5585CE"
        },
        {
            href: role === roleAccount.seito ? "/login" : "/staff/login",
            title: "ログアウト",
            isShow: [roleAccount.admin, roleAccount.kousi, roleAccount.seito],
            backgroundColor: "#F02941"
        }
    ]
}

const timeZoneBrowser = moment.tz.guess()

const urlify = (text: string) => {
    var urlRegex =
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    return text.replace(urlRegex, url => {
        let link = `<a style='color: #1890ff'  href="http://${url}" target="_blank">${url}</a>`
        if (url.includes("http" || "https")) {
            link = `<a style='color: #1890ff'  href="${url}" target="_blank">${url}</a>`
            return link
        }
        return link
    })
}

const toTimestamp = strDate => {
    const dt = moment(strDate).unix()
    return dt
}

export {
    YYYYMMDD,
    YYYYMMDDTHHmmssSSST,
    keyStorage,
    keyTypeScreenLogin,
    listKeyCodeNumber,
    listMenu,
    listNamePopup,
    listOptionMenuHeader,
    maxWidthResponsive,
    permissionRouterUser,
    roleAccount,
    ruleApplyAbsent,
    ruleEmailLogin,
    ruleInputMessageCreateContact,
    rulePasswordLogin,
    ruleSendMessage,
    ruleUserNameLogin,
    screenWidth,
    statusCode,
    timeZoneBrowser,
    toTimestamp,
    typeInputCustom,
    typeNotification,
    typeScreenLogin,
    urlify
}
