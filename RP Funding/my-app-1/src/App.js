import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import AppHeader from './components/AppHeader/AppHeader'
import Home from './pages/Home/Home'
import Charts from './pages/Charts/Charts'

function App() {
  return (
    <Container maxWidth={false} disableGutters={true}>
        <Router>
          <AppHeader />

          {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/charts" component={Charts} />
          </Switch>
        </Router>
    </Container>
  )
}

export default App
