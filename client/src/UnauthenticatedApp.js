import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <Switch>
      <Route exact path="/api/">
        <Login setCurrentUser={setCurrentUser} />
      </Route>
      <Route exact path="/api/signup">
        <Signup setCurrentUser={setCurrentUser}/>
      </Route>
      <Redirect to="/api/" />
    </Switch>
  )
}

export default UnauthenticatedApp
