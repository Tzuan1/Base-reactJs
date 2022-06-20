import { keyStorage, roleAccount } from "@/shared/constants"

const checkAuthentication = () => {
    const token = localStorage.getItem(keyStorage.assetToken)
    const role = localStorage.getItem(keyStorage.role)
    // if token invalid or role invalid or role not availble redrect page login
    return !(
        !token ||
        !role ||
        (role && !Object.keys(roleAccount).includes(role))
    )
}

const getRole = () => {
    return localStorage.getItem(keyStorage.role)
}

const checkPermissionRouter = (listRole: any) => {
    return true
}

const clearStorage = () => {
    localStorage.clear()
}

const copyDeep = (value: any) => {
    return JSON.parse(JSON.stringify(value))
}

const getDataStorage = (key: string) => {
    return localStorage.getItem(key)
}

const setDataStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
}

export {
    copyDeep,
    clearStorage,
    checkAuthentication,
    checkPermissionRouter,
    getDataStorage,
    getRole,
    setDataStorage
}
