import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './views/home'

import Header from './components/header'

import Reboot from 'material-ui/Reboot'

export default class App extends React.Component {
  render() {
    return (
      <>
        <Reboot />
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route component={NotFound} /> */}
          </Switch>
        </main>
      </>
    )
  }
}
