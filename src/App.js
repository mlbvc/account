import React, { Component } from 'react'
// import ReactDom from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Admin from './Page/Admin/Admin'
import Login from './Page/Login/Login'

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path='/' component={Admin} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    )
  }
}
export default App;
