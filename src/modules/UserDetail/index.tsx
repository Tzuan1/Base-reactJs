import React, { useEffect } from "react"

import { Col, Row } from "antd"

import styles from "./index.scss"
import UserInfo from "./components/UserInfo"
import Reports from "./components/Reports"
import Projects from "./components/Projects"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { checkLevelUser } from "@/shared/function"
import { userDetailTypes } from "./redux/reduces"
import { useParams } from "react-router"

const UserDetail = () => {
    const dispatch = useDispatch()
    const params: any = useParams()

    useEffect(() => {
        dispatch({
            type: userDetailTypes.GET_USER_DETAIL,
            payload: {
                userId: params?.id
            }
        })
    }, [])
    const userDetailData = useSelector(
        (state: RootStateOrAny) => state.userDetail.dataUser.data
    )

    return (
        <div className={styles.userDetail}>
            <div className="info">
                <div className="info_head">
                    <h3 className="name">
                        {userDetailData?.full_name}{" "}
                        <span className="label">
                            {checkLevelUser(userDetailData?.level)}
                        </span>
                    </h3>
                </div>
                <div className="info_container">
                    <Row gutter={20}>
                        <Col span={12}>
                            <UserInfo />
                        </Col>
                        <Col span={12}>
                            <Reports />
                        </Col>
                    </Row>
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default UserDetail
