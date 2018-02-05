import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './views/Home'

import Header from './components/Header'

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
