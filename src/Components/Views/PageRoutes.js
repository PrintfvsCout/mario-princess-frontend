import React from "react"
import { BrowserRouter as Route, Switch } from "react-router-dom"

import Game from "../Game"
import GameResults from "../Views/GameResults"
import Home from "./Home"

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/results">
        <GameResults />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
    </Switch>
  )
}

export default PageRoutes
