import React, { useState } from "react"
import styles from "./index.module.scss"
import DropdownCustom from "@/components/DropdownCustom"
import LogoPng from "@/assets/image/Logo.png" //If I put it in .svg format, the mobile screen will be blurred
import { CaretDownFilled } from "@ant-design/icons"
import { Menu } from "antd"
import { Link, useHistory } from "react-router-dom"
import { getDataStorage, getRole } from "@/shared"
import { keyStorage, listOptionMenuHeader } from "@/shared/constants"
import ButtonCustom from "@/components/ButtonCustom"
import IconMenu from "@/assets/image/IconMenu.svg"
import CloseNavbarMb from "@/assets/image/CloseNavbarMb.svg"
import NavigationNavBar from "../NavigationNavBar"
import { ITypeOptionMenuHeader } from "@/shared/constants/IContants"

const HeaderCalendar = () => {
    const history = useHistory()

    let UserInformation
    let userInfStorage = getDataStorage(keyStorage.profile)
    if (userInfStorage) {
        UserInformation = JSON.parse(userInfStorage)
    }

    const getShortName = () => {
        return UserInformation?.userName?.split("　")[0]
    }

    const redirectHomePage = () => {
        history.push("/")
    }

    const [isShowMenu, setIsShowMenu] = useState(false)
    const handleToggleShowMenu = () => {
        setIsShowMenu(prev => !prev)
    }
    function btnAction() {
        let addCss = styles.menuRight
        if (isShowMenu) {
            addCss += " " + styles.menuRightActive
        }
        return addCss
    }
    const MenuDropdown = (props: any) => {
        return (
            <Menu className={styles.dropdownMenu}>
                <Menu.Item key={992}>
                    <p key={99}>正式名前 : {UserInformation?.userName}</p>
                    <p key={990}>ID : {UserInformation?.u_id}</p>
                    <p key={991}>生徒番号: {UserInformation?.seitoNo}</p>
                </Menu.Item>
                <Menu.Divider />
                {listOptionMenuHeader(getRole()).map(
                    (item: ITypeOptionMenuHeader, index: number) => {
                        // @ts-ignore
                        if (item.isShow.includes(getRole())) {
                            return (
                                <Menu.Item
                                    key={index}
                                    style={{
                                        backgroundColor: item.backgroundColor
                                    }}
                                >
                                    <Link
                                        rel="noopener noreferrer"
                                        to={item.href}
                                    >
                                        {item.title}
                                    </Link>
                                </Menu.Item>
                            )
                        }
                        return
                    }
                )}
            </Menu>
        )
    }
    return (
        <div className={styles.headerPage}>
            <div className={styles.headerCalendar}>
                <div className={styles.headerLeft}>
                    <img onClick={redirectHomePage} src={LogoPng} alt="Logo" />
                </div>
                <div className={styles.headerCenter}>
                    <NavigationNavBar />
                </div>
                <div className={styles.headerRight}>
                    <DropdownCustom
                        titleDropdown={getShortName()}
                        iconDropdown={<CaretDownFilled />}
                        placement="bottomRight"
                        menuDropdown={MenuDropdown}
                    />

                    <ButtonCustom
                        text=""
                        className="btnCloseMenu"
                        icon={IconMenu}
                        onClick={handleToggleShowMenu}
                        style={{ backgroundColor: "#fff" }}
                    />
                </div>
            </div>
            <div className={btnAction()}>
                <ButtonCustom
                    text=""
                    type="primary"
                    onClick={handleToggleShowMenu}
                    style={{ backgroundColor: "transparent" }}
                    icon={CloseNavbarMb}
                    className="btnCloseMenu"
                />
                <MenuDropdown />
            </div>
        </div>
    )
}

export default HeaderCalendar
