import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import AppHeader from './components/AppHeader/AppHeader'
import Orders from './pages/Orders/Orders'
import About from './pages/About/About'

/**
 * Main App view with Router for each page
 */
function App() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Router>
        <AppHeader />

        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route exact={true} path="/" component={Orders} />
          <Route exact={true} path="/about" component={About} />
        </Switch>
      </Router>
    </Container>
  )
}

export default App
