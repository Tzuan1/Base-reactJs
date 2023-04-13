import { PATH_ROUTES } from "@/shared/routerConfig/PathRoutes"
import React from "react"
import { NavLink } from "react-router-dom"
import styles from "./index.module.scss"

const SideMenu = () => {
    return (
        <div className={styles.sideMenuCompany} id="sidebar">
            <div>
                <NavLink className="menu-item" to={PATH_ROUTES.INDEX}>
                    Dash Board
                </NavLink>

                <NavLink className="menu-item" to={PATH_ROUTES.TEST_COMPONENTS}>
                    Test Component
                </NavLink>
            </div>
        </div>
    )
}

export default React.memo(SideMenu)
