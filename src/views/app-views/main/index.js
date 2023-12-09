import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom'
import Loading from 'components/shared-components/Loading'

const Main = ({ match }) => {
    return (
        <Suspense fallback={<Loading cover="content" />}>
            <Switch>
                <Route
                    path={`${match.url}/clients`}
                    component={lazy(() => import(`./clients`))}
                />
                <Redirect
                    from={`${match.url}`}
                    to={`${match.url}/clients`}
                />
            </Switch>
        </Suspense>
    )
}

export default Main
