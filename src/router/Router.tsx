import { memo, VFC } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Home } from "../components/pages/Home"

import { Login } from "../components/pages/Login"
import { Page404 } from "../components/pages/Page404"
import { Setting } from "../components/pages/Setting"
import { HeaderSidebarLayout } from "../components/templates/HeaderSidebarLayout"
import { LoginUserProvider } from "../providers/LoginUserProvider"
import { wantedsRoutes } from "./WantedsRoutes"

export const Router: VFC = memo(() => {
  return (
    <BrowserRouter>
      <Switch>
        <LoginUserProvider>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <HeaderSidebarLayout>
              <Home />
            </HeaderSidebarLayout>
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
                    <HeaderSidebarLayout>{route.children}</HeaderSidebarLayout>
                  </Route>
                ))}
              </Switch>
            )}
          />
          <Route path="/setting">
            <HeaderSidebarLayout>
              <Setting />
            </HeaderSidebarLayout>
          </Route>
        </LoginUserProvider>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )
})
