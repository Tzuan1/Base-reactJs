import React from "react"
import { ConnectedRouter } from "connected-react-router"
import history from "@/shared/helper/history"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import routerDefine from "@/shared/routerConfig"
import { checkAuthentication } from "@/shared"
import LayoutCalendar from "@/components/LayoutCalendar"

const Router = () => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <BrowserRouter>
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
                                        {itemRouter.component}
                                    </PrivateRoute>
                                )
                            }
                            return (
                                <Route
                                    exact={itemRouter.exact}
                                    key={index}
                                    path={itemRouter.path}
                                >
                                    {itemRouter.component}
                                </Route>
                            )
                        })}
                    </Switch>
                </BrowserRouter>
            </div>
        </ConnectedRouter>
    )
}

function PrivateRoute({ children, role, ...rest }: any) {
    return (
        <LayoutCalendar>
            <Route
                {...rest}
                render={({ location }) => {
                    if (checkAuthentication()) {
                        // if (!checkPermissionRouter(location)) {
                        //     return (
                        //         <Redirect
                        //             to={{
                        //                 pathname: "/login",
                        //                 state: { from: location }
                        //             }}
                        //         />
                        //     )
                        // }
                        return children
                    }
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }}
            />
        </LayoutCalendar>
    )
}

export default Router
