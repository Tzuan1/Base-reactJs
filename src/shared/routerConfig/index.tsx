import React from "react"
import { IRouter } from "@/@type"
import Login from "@/modules/Login"
import NoMatch from "@/modules/NoMatch"
import Tuition from "@/modules/Tuition"
import TestComponents from "@/modules/TestComponents"

const routerDefine: IRouter[] = [
    {
        path: "/login",
        exact: true,
        component: <Login />
    },
    {
        path: "/tuition",
        exact: true,
        component: <Tuition />,
        isAuth: false
    },
    {
        path: "/testComponents",
        exact: true,
        component: <TestComponents />,
        isAuth: false
    },
    {
        path: "*",
        exact: false,
        component: <NoMatch />
    }
]

export default routerDefine
