import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import WantedPage from "./components/pages/WantedPage"
import HomePage from "./components/pages/HomePage"

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/wanteds" component={WantedPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  )
}

export default App
