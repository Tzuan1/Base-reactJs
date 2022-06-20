import React from "react"
import { getRole } from "@/shared"
import { Link, useHistory } from "react-router-dom"
import { listMenu } from "@/shared/constants"
const NavigationNavBar = () => {
    const history = useHistory()
    let role = getRole()
    const renderActiveRouter = params => {
        return params === history.location.pathname
    }
    return (
        <ul>
            {listMenu.length > 0 &&
                listMenu.map((item, index) => {
                    if (role && item.isShow?.includes(role)) {
                        return (
                            <li key={index}>
                                <Link
                                    to={item.href}
                                    style={{
                                        color: renderActiveRouter(item.href)
                                            ? "#00A0D7"
                                            : "#000333"
                                    }}
                                >
                                    <img
                                        src={
                                            renderActiveRouter(item.href)
                                                ? item.iconActive
                                                : item.icon
                                        }
                                        alt={
                                            renderActiveRouter(item.href)
                                                ? `${item.iconActive}`
                                                : `${item.icon}`
                                        }
                                    />
                                    {item.title}
                                </Link>
                            </li>
                        )
                    }
                    return
                })}
        </ul>
    )
}

export default NavigationNavBar
