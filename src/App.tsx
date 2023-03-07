import React from "react"
import "./App.scss"
import { Route, Switch } from "react-router-dom"
import LoginPage from "./pages/login-page/LoginPage"
import ErrorPage from "./pages/404/404"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  )
}

export default App
