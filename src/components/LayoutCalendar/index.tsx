import React, { useState } from "react"
import styles from "./index.module.scss"
import HeaderCalendar from "@/components/LayoutCalendar/components/HeaderCalendar"
import NavigationNavBar from "./components/NavigationNavBar"
import { deviceResponsiveIOS } from "@/shared/function"
import { getRole } from "@/shared"
import { roleAccount } from "@/shared/constants"

const LayoutCalendar = ({ children }: any) => {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)
    const styleCssLayout = () => {
        let listStyle: any = {
            height: "100vh"
        }
        if (deviceResponsiveIOS()) {
            listStyle.height = screenHeight
        }
        return listStyle
    }

    const naviFooter = () => {
        let addClass = styles.navigateFooter
        if (getRole() === roleAccount.admin) {
            addClass += " " + styles.naviFooterMobi
        }
        return addClass
    }

    var supportsOrientationChange = "onorientationchange" in window,
        orientationEvent = supportsOrientationChange
            ? "orientationchange"
            : "resize"

    window.addEventListener(
        orientationEvent,
        function () {
            setScreenHeight(window.innerHeight)
        },
        false
    )

    return (
        <div className={styles.layoutCalendar} style={styleCssLayout()}>
            <HeaderCalendar />
            {children}
            <div className={naviFooter()}>
                <NavigationNavBar />
            </div>
        </div>
    )
}

export default LayoutCalendar
