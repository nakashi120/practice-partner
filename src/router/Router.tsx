import { memo, VFC } from "react"
import { Route, Switch } from "react-router-dom"
import { Home } from "../components/pages/Home"

import { Login } from "../components/pages/Login"
import { Page404 } from "../components/pages/Page404"
import { Setting } from "../components/pages/Setting"
import { HeaderLayout } from "../components/templates/HeaderLayout"
import { wantedsRoutes } from "./WantedsRoutes"

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <HeaderLayout>
          <Home />
        </HeaderLayout>
      </Route>
      <Route
        path="/wanteds"
        render={({ match: { url } }) => (
          <Switch>
            {wantedsRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/setting">
        <HeaderLayout>
          <Setting />
        </HeaderLayout>
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
})
