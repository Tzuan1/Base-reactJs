import React, { FC, ReactElement, ReactNode } from "react"

// antd ui
import { Spin } from "antd"

type loadingProps = {
    spinning?: boolean
    tip?: ReactNode
}

const LoadingCustom: FC<loadingProps> = ({
    spinning = true,
    tip
}: loadingProps): ReactElement => {
    return (
        <div className="overlay-custom">
            <div className="overlay-content">
                <Spin spinning={spinning} tip={tip} size="large" />
            </div>
        </div>
    )
}

export default React.memo(LoadingCustom)
