import apiServices from "@/services/api/axios"
import {
    ITypeParamsGetUser,
    ITypeParamsPassword
} from "../shared/typings/userDetail-type"

const userDetailService = {
    getUserDetail({ userId }: ITypeParamsGetUser) {
        let url = `api/users/${userId}`
        return apiServices.get(url)
    },
    postResetPassword(payload: ITypeParamsPassword) {
        let url = `api/users/password`
        return apiServices.post(url, payload)
    }
}

export default userDetailService
