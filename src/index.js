import React from 'react'
import { Router, Route, Link } from 'react-router'
import { history } from 'react-router/lib/HashHistory'
import App from './components/App'
import Channel from './components/Channel'

React.render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path=":channel" component={Channel} />
    </Route>
  </Router>
), document.getElementById('root'));

