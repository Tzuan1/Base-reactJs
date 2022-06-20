import apiServices from "@/services/api/axios"
import { ILogin } from "@/modules/Login/typings/login-type"

const LoginService = {
    apiLogin(params: ILogin) {
        return apiServices.post("/login", params)
    }
}

export default LoginService
