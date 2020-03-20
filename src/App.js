import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const App = () => {

  return (
    <Router>
      <div>
        <Link to="/">Go home</Link>
        <Link to="/hotdog">Go hotdog</Link>
        <Switch>
          <Route exact path="/">
            <h1>This is the home page</h1>
          </Route>
          <Route path="/hotdog">
            <h1>This is the hotdog page</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App