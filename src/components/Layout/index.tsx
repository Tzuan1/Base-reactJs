import React, { FC, ReactElement, ReactNode } from "react"

// component
import Header from "./Header"
import SideMenu from "./SideMenu"

import styles from "./index.module.scss"

// types
type LayoutProps = {
    children?: ReactNode // type children
}

const Company: FC<LayoutProps> = ({ children }: LayoutProps): ReactElement => {
    return (
        <div className={styles.containerLayoutCompany}>
            <div className="sidebar-wrap d-none" id="sidebar-wrap" />

            <SideMenu />
            <div className="content">
                <Header />
                <div className="main">{children}</div>
            </div>
        </div>
    )
}

export default React.memo(Company)
