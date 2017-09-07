import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import SignUp from './SignUp'
import SignIn from './SignIn'
import About from './About'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
)

export default App
