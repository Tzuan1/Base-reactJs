import apiServices from "@/services/api/axios"
import {
    ITypeParamsEditUser,
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
    },
    putEditUser(payload: ITypeParamsEditUser) {
        const { userId, params } = payload
        let url = `api/users/${userId}`
        return apiServices.put(url, params)
    }
}

export default userDetailService
