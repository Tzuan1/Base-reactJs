import React, { ComponentType, Suspense } from "react"
import { ConnectedRouter } from "connected-react-router"
import { BrowserRouter, Route, RouteProps, Switch } from "react-router-dom"
import history from "@/shared/helper/history"
import routerDefine from "@/shared/routerConfig"

interface Props extends RouteProps {
    layout?: React.FunctionComponent<any>
    component: ComponentType
    width?: string
    name?: string
}

const Router = () => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <BrowserRouter>
                    <Suspense fallback={<></>}>
                        <Switch>
                            {routerDefine.map((itemRouter, index) => {
                                if (itemRouter.isAuth) {
                                    return (
                                        <PrivateRoute
                                            key={index}
                                            path={itemRouter.path}
                                            exact={itemRouter.exact}
                                            role={itemRouter.role}
                                        >
                                            {routeWrapper(
                                                itemRouter?.layout,
                                                itemRouter.component,
                                                itemRouter.width
                                            )}
                                        </PrivateRoute>
                                    )
                                }
                                return (
                                    <Route
                                        exact={itemRouter.exact}
                                        key={index}
                                        path={itemRouter.path}
                                    >
                                        {routeWrapper(
                                            itemRouter.layout,
                                            itemRouter.component,
                                            itemRouter.width
                                        )}
                                    </Route>
                                )
                            })}
                        </Switch>
                    </Suspense>
                </BrowserRouter>
            </div>
        </ConnectedRouter>
    )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PrivateRoute({ children, role, test, ...rest }: any) {
    return (
        <Route
            {...rest}
            render={() => {
                return children
            }}
        />
    )
}

const routeWrapper = (
    Layout: Props["layout"],
    Component: Props["component"],
    width?: Props["width"]
) => {
    if (Layout) {
        return (
            <Layout width={width}>
                <Component />
            </Layout>
        )
    }
    return <Component />
}

export default Router
