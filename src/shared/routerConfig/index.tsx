import { IRouter } from "@/@type"
import { lazy } from "react"
import { PATH_ROUTES } from "./PathRoutes"

import Layout from "@/components/Layout"
import logoDashboard from "@/assets/icons/dashboard.svg"
import logoProject from "@/assets/icons/project.svg"
// import logoAdmin from "@/assets/icons/administrator.svg"
import logoUser from "@/assets/icons/user.svg"
import logoCustomer from "@/assets/icons/customer.svg"
// import logoSetting from "@/assets/icons/setting.svg"
// import logoHelp from "@/assets/icons/help.svg"

const Login = lazy(() => import("@/modules/Login"))
const NoMatch = lazy(() => import("@/modules/NoMatch"))
const Tuition = lazy(() => import("@/modules/Tuition"))
const TestComponents = lazy(() => import("@/modules/TestComponents"))
const DashBoard = lazy(() => import("@/modules/DashBoard"))
const Projects = lazy(() => import("@/modules/Projects"))
const User = lazy(() => import("@/modules/User"))
const UserDetail = lazy(() => import("@/modules/UserDetail"))
const Customer = lazy(() => import("@/modules/Customer"))
const CustomerDetail = lazy(() => import("@/modules/CustomerDetail"))

const routerDefine: IRouter[] = [
    {
        path: PATH_ROUTES.INDEX,
        exact: true,
        component: DashBoard,
        layout: Layout,
        sideMenu: true,
        title: "Dash board",
        logo: logoDashboard
    },
    {
        path: PATH_ROUTES.PROJECTS,
        exact: true,
        component: Projects,
        isAuth: false,
        layout: Layout,
        sideMenu: true,
        title: "Dự án",
        logo: logoProject
    },
    {
        path: PATH_ROUTES.USER,
        exact: true,
        component: User,
        isAuth: false,
        layout: Layout,
        sideMenu: true,
        title: "Nhân sự",
        logo: logoUser
    },
    {
        path: PATH_ROUTES.USER_DETAIL,
        exact: true,
        component: UserDetail,
        isAuth: false,
        layout: Layout,
        sideMenu: false
    },
    {
        path: PATH_ROUTES.CUSTOMER,
        exact: true,
        component: Customer,
        isAuth: false,
        layout: Layout,
        sideMenu: true,
        title: "Khách Hàng",
        logo: logoCustomer
    },
    {
        path: PATH_ROUTES.CUSTOMER_DETAIL,
        exact: true,
        component: CustomerDetail,
        isAuth: false,
        layout: Layout,
        sideMenu: false
    },
    {
        path: PATH_ROUTES.LOGIN,
        exact: true,
        component: Login
    },
    {
        path: PATH_ROUTES.TUITION,
        exact: true,
        component: Tuition,
        isAuth: false
    },
    {
        path: PATH_ROUTES.TEST_COMPONENTS,
        exact: true,
        component: TestComponents,
        isAuth: false,
        layout: Layout
    },
    {
        path: PATH_ROUTES.USER,
        exact: true,
        component: User,
        isAuth: false,
        layout: Layout
    },
    {
        path: "*",
        exact: false,
        component: NoMatch
    }
]

export default routerDefine
