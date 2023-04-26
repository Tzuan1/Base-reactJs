import { PATH_ROUTES } from "@/shared/routerConfig/PathRoutes"
import React, { useCallback, useEffect } from "react"
import { NavLink, useLocation } from "react-router-dom"
import styles from "./index.module.scss"

//img
import Logo from "@/assets/image/logo-miichi.svg"

import { useDispatch } from "react-redux"
import { layoutActionTypes } from "../redux/reduces"
import routerDefine from "@/shared/routerConfig"
import { IRouter } from "@/@type"
import { objectHasKey } from "@/shared/function"
// import DashboardActive from "@/assets/icons/dashboard-active.svg"

interface ITypeActionSideMenu {
    titlePage: string
}

const SideMenu = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        const titleDefault = routerDefine.find(
            (e: IRouter) => e.path === location.pathname
        )

        if (titleDefault && titleDefault.title) {
            handleClickSideMenu({ titlePage: titleDefault.title })
        }

        dispatch({
            type: layoutActionTypes.SET_LIST_DEPARTMENT
        })
        dispatch({
            type: layoutActionTypes.SET_LIST_POSITION
        })
    }, [])

    const handleClickSideMenu = useCallback(
        (dataAction: ITypeActionSideMenu) => {
            const { titlePage } = dataAction
            dispatch({
                type: layoutActionTypes.SET_LAYOUT_TITLE,
                payload: titlePage
            })
        },
        []
    )

    return (
        <div className={styles.sideMenuCompany} id="sidebar">
            <NavLink className="logo" to={PATH_ROUTES.INDEX}>
                <img src={Logo} alt="via-learn" />
            </NavLink>
            <div className="menu-list">
                {routerDefine
                    .filter((e: IRouter) => e.sideMenu)
                    .map((itemRouter, key) =>
                        objectHasKey(itemRouter, "sideMenu") ? (
                            <NavLink
                                key={key}
                                className="menu-item"
                                to={itemRouter.path}
                                exact={itemRouter.exact}
                                activeClassName="item-selected"
                                onClick={() =>
                                    handleClickSideMenu({
                                        titlePage: itemRouter.title || ""
                                    })
                                }
                            >
                                <img src={itemRouter.logo} />
                                {itemRouter.title || ""}
                            </NavLink>
                        ) : null
                    )}
            </div>
        </div>
    )
}

export default React.memo(SideMenu)
