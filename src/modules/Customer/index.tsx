import React, { useCallback, useMemo } from "react"
import { Button } from "antd"

//img
import IconFilterR from "@/assets/icons/filter-regular.png"

import styles from "./index.scss"
import InputCustom from "@/components/InputCustom"
import TableCustom from "@/components/TableCustom"
import ButtonCustom from "@/components/ButtonCustom"

import { useDispatch } from "react-redux"
import { popupTypes } from "@/redux/reduces/popupReducer"
import { ListNamePopup } from "@/shared/enum"

const Customer = () => {
    const dispatch = useDispatch()
    const togglePopupCreateCustomer = () => {
        dispatch({
            type: popupTypes.SHOW_POPUP,
            payload: {
                typePopup: ListNamePopup.popupCreateCustomer,
                params: {
                    className: "popupScreen",
                    titleModal: "New Customer"
                }
            }
        })
    }
    const getColorStatus = useCallback(status => {
        let color = "success"
        switch (status) {
            case "VIP": {
                color = "success"
                break
            }
            case "V-VIP": {
                color = "red"
                break
            }
            case "S-VIP": {
                color = "purple"
                break
            }
            default: {
                color = "success"
                break
            }
        }
        return (
            <Button type="primary" className={color}>
                {status}
            </Button>
        )
    }, [])
    const dataSource = [
        {
            key: "1",
            customer_code: "ADS",
            customer_name: "MIICHISOFT",
            customer_name_jp: "ミイチソフト",
            customer_type: "SI",
            customer_level: ["VIP"],
            date: "2023/03/13"
        }
    ]
    const columns = useMemo(() => {
        return [
            {
                title: "Customer No",
                key: "customer_code",
                dataIndex: "customer_code",
                render: (text: string) => <a className="link">{text}</a>
            },
            {
                title: "Customer Name",
                dataIndex: "customer_name",
                key: "customer_name"
            },
            {
                title: "Customer Name (JP)",
                dataIndex: "customer_name_jp",
                key: "customer_name_jp"
            },
            {
                title: "Customer Type",
                dataIndex: "customer_type",
                key: "customer_type"
            },
            {
                title: "Customer Level",
                key: "customer_level",
                dataIndex: "customer_level",
                render: (status: string) => <>{getColorStatus(status)}</>
            },
            {
                title: "Register Date",
                dataIndex: "date",
                key: "date"
            }
        ]
    }, [])
    return (
        <div className={styles.customer}>
            <div className="container-head">
                <Button className="btn-import btn-hover">Import CSV</Button>
                <div className="input-search input-search-cus">
                    <InputCustom typeInput="search" placeholder="Tìm kiếm" />
                    <Button className="btn-filter">
                        <img src={IconFilterR} alt="icon" />
                        Filters
                    </Button>
                </div>
            </div>
            <TableCustom columns={columns} dataSource={dataSource} />
            <ButtonCustom
                className="btn-add"
                text="+"
                onClick={() => togglePopupCreateCustomer()}
            />
        </div>
    )
}

export default Customer
