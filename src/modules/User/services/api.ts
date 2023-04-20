import apiServices from "@/services/api/axios"
import { ITypeParamsGetListUser } from "../shared/typings/user-type"

const UserService = {
    getListUser(payload: ITypeParamsGetListUser) {
        const { status, pageIndex } = payload
        let url = `api/users?status=${status}&page=${pageIndex}`
        return apiServices.get(url)
    }
}

export default UserService
