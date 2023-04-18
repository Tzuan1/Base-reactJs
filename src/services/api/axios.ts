import axios, { AxiosRequestConfig } from "axios"
import { getDataStorage } from "@/shared"
import history from "@/shared/helper/history"
import { statusCode } from "@/shared/constants"

const apiConfig = axios.create({
    baseURL: process.env.APP_URL,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    timeout: 10000
})

apiConfig.interceptors.request.use(
    (config: any) => {
        const token = getDataStorage("assetToken")
        if (token) {
            config.headers.Authorization = "Bearer " + token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
apiConfig.interceptors.response.use(
    (response: AxiosRequestConfig) => {
        return response
    },
    (error: any) => {
        const { status } = error.response
        if (status === statusCode.expired_token) {
            history.push("/login")
            return
        }
        return error.response
    }
)

const apiServices = {
    post(urlApi: string, params?: any) {
        return apiConfig
            .post(urlApi, params)
            .then(response => response)
            .catch(error => error)
    },
    put(urlApi: string, params?: any) {
        return apiConfig
            .put(urlApi, params)
            .then(response => response)
            .catch(error => error)
    },
    patch(urlApi: string, params?: any) {
        return apiConfig
            .patch(urlApi, params)
            .then(response => response)
            .catch(error => error)
    },
    get(urlApi: string) {
        return apiConfig
            .get(urlApi)
            .then(response => response)
            .catch(error => error)
    },
    delete(urlApi: string) {
        return apiConfig
            .delete(urlApi)
            .then(response => response)
            .catch(error => error)
    }
}
export default apiServices
