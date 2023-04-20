import {
    IInitialUserReducer,
    IStatusWorkUser,
    IskeyUserTabs
} from "../typings/user-type"

const InitialUser: IInitialUserReducer = {
    isLoading: false,
    listUser: {}
}

const statusWorkUser: IStatusWorkUser = {
    All: 0,
    Onboarding: 1,
    Waiting: 2,
    Retired: 3
}

const keyUserTab: IskeyUserTabs = {
    Dashboard: "Dashboard",
    All: "All",
    Onboarding: "Onboarding",
    Waiting: "Waiting",
    Retired: "Retired"
}

const listSelectPosition = [
    {
        value: "CEO",
        name: "CEO"
    },
    {
        value: "CTO",
        name: "CTO"
    },
    {
        value: "DM",
        name: "DM"
    }
]

const listSelectDepartment = [
    {
        value: "d1",
        name: "D1"
    },
    {
        value: "d2",
        name: "D2"
    }
]

export {
    InitialUser,
    statusWorkUser,
    keyUserTab,
    listSelectDepartment,
    listSelectPosition
}
