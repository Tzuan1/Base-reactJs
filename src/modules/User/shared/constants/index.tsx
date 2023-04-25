import {
    IInitialUserReducer,
    IStatusWorkUser,
    IsKeyUserTabs
} from "../typings/user-type"

const InitialUser: IInitialUserReducer = {
    isLoading: false,
    listUser: {},
    newUser: {},
    countActiveUser: 0,
    countWaitUser: 0,
    countAllUser: 0,
    countOffUser: 0
}

const statusWorkUser: IStatusWorkUser = {
    All: 0,
    Onboarding: 1,
    Waiting: 2,
    Retired: 3
}

const keyUserTab: IsKeyUserTabs = {
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

const listSelectGender = [
    {
        value: 1,
        label: "Male"
    },
    {
        value: 2,
        label: "Female"
    },
    {
        value: 3,
        label: "Other"
    }
]

const listSelectLevel = [
    {
        value: 1,
        label: "Intern"
    },
    {
        value: 2,
        label: "Fresher"
    },
    {
        value: 3,
        label: "Junior"
    },
    {
        value: 4,
        label: "Middle"
    },
    {
        value: 5,
        label: "Senior"
    }
]

export {
    InitialUser,
    statusWorkUser,
    keyUserTab,
    listSelectDepartment,
    listSelectPosition,
    listSelectGender,
    listSelectLevel
}
