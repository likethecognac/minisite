import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom'
import './base.css'
import Demo1 from './demos/Demo1'
import Demo2 from './demos/Demo2'
import myLogo from './svg/jph-logo.svg'

// Inspired by:
// https://twitter.com/beesandbombs/status/1329796242298245124

function App() {
  return (
    <Router basename="/">
      <div className="frame">
        <div className="frame__demos">
          <Link to="https://www.linkedin.com/in/johnpaulhennessy/" className="frame__demo">
            LinkedIn 
          </Link>
          <Link to="https://www.instagram.com/yewnork2" className="frame__demo">
            Instagram
          </Link>
          <Link to="https://www.instagram.com/yewnork/?hl=en" className="frame__demo">
            Twitter
          </Link>
        </div>
      </div>
      <div className="content">
        <div className="logo"><img  src={myLogo} alt="SVG logo image"/></div>
        <h2 className="content__title">John Paul Hennessy</h2>
        <p>Product, User Experience and Brand Design</p>
      </div>
      <div id="animation">
        <Switch>
          <Route exact path="/demo1">
            <Demo1 />
          </Route>
          <Route exact path="/demo2">
            <Demo2 />
          </Route>
          <Route path="*">
            <Redirect to="/demo1" />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
