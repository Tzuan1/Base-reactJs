import { PATH_ROUTES } from "@/shared/routerConfig/PathRoutes"
import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./index.module.scss"

//img
import Logo from "@/assets/image/logo-miichi.svg"
import Dashboard from "@/assets/icons/dashboard.svg"
import Project from "@/assets/icons/project.svg"
import Admin from "@/assets/icons/administrator.svg"
import User from "@/assets/icons/user.svg"
import Customer from "@/assets/icons/customer.svg"
import Setting from "@/assets/icons/setting.svg"
import Help from "@/assets/icons/help.svg"
import { useDispatch } from "react-redux"
// import DashboardActive from "@/assets/icons/dashboard-active.svg"

const SideMenu = () => {
    const dispatch = useDispatch()
    return (
        <div className={styles.sideMenuCompany} id="sidebar">
            <NavLink className="logo" to={PATH_ROUTES.INDEX}>
                <img src={Logo} alt="via-learn" />
            </NavLink>
            <div className="menu-list">
                <NavLink
                    className="menu-item"
                    to={PATH_ROUTES.INDEX}
                    exact={true}
                    activeClassName="item-selected"
                    onClick={() =>
                        dispatch({
                            type: "SET_LAYOUT_TITLE",
                            payload: "Dash Board"
                        })
                    }
                >
                    <img src={Dashboard} />
                    Dash Board
                </NavLink>
                <NavLink
                    className="menu-item"
                    to={PATH_ROUTES.PROJECTS}
                    exact={true}
                    activeClassName="item-selected"
                    onClick={() =>
                        dispatch({
                            type: "SET_LAYOUT_TITLE",
                            payload: "Dự án"
                        })
                    }
                >
                    <img src={Project} />
                    Dự án
                </NavLink>
                <NavLink
                    className="menu-item"
                    to={"/administrator"}
                    exact={true}
                    activeClassName="item-selected"
                    onClick={() =>
                        dispatch({
                            type: "SET_LAYOUT_TITLE",
                            payload: "Hành chính"
                        })
                    }
                >
                    <img src={Admin} />
                    Hành chính
                </NavLink>
                <NavLink
                    className="menu-item"
                    to={"/member"}
                    exact={true}
                    activeClassName="item-selected"
                    onClick={() =>
                        dispatch({
                            type: "SET_LAYOUT_TITLE",
                            payload: "Nhân sự"
                        })
                    }
                >
                    <img src={User} />
                    Nhân sự
                </NavLink>
                <NavLink
                    className="menu-item"
                    to={"/customer"}
                    exact={true}
                    activeClassName="item-selected"
                    onClick={() =>
                        dispatch({
                            type: "SET_LAYOUT_TITLE",
                            payload: "Khách hàng"
                        })
                    }
                >
                    <img src={Customer} />
                    Khách hàng
                </NavLink>
                <NavLink
                    className="menu-item"
                    to={"/setting"}
                    exact={true}
                    activeClassName="item-selected"
                    onClick={() =>
                        dispatch({
                            type: "SET_LAYOUT_TITLE",
                            payload: "Cài đặt"
                        })
                    }
                >
                    <img src={Setting} />
                    Cài đặt
                </NavLink>
                <NavLink
                    className="menu-item"
                    to={"/help"}
                    exact={true}
                    activeClassName="item-selected"
                    onClick={() =>
                        dispatch({
                            type: "SET_LAYOUT_TITLE",
                            payload: "Help"
                        })
                    }
                >
                    <img src={Help} />
                    Help
                </NavLink>
            </div>
        </div>
    )
}

export default React.memo(SideMenu)
