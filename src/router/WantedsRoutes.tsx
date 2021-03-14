import { NewWanted } from "../components/pages/NewWanted"
import { Page404 } from "../components/pages/Page404"
import { Wanteds } from "../components/pages/Wanteds"

export const wantedsRoutes = [
  {
    path: "/",
    exact: true,
    children: <Wanteds />,
  },
  {
    path: "/new",
    exact: false,
    children: <NewWanted />,
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />,
  },
]
