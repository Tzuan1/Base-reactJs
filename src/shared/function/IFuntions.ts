import { FormInstance } from "antd"
import { IconType } from "antd/lib/notification"

type INotification = {
    type: IconType
    message: string
}

type IFunFormatData = {
    form: FormInstance
    evt?: any
    name: string
    value?: any
}

type IGetScreenDevice = {
    innerWidth: number
    innerHeight: number
}
export type { INotification, IFunFormatData, IGetScreenDevice }
