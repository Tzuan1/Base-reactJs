import apiServices from "@/services/api/axios"

const listDepartmentService = {
    getListDepartment() {
        let url = `api/common/deparment`
        return apiServices.get(url)
    },
    getListPosition() {
        let url = `api/common/position`
        return apiServices.get(url)
    }
}

export default listDepartmentService
