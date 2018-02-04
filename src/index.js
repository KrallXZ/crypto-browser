import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import App from './app'

import { MuiThemeProvider } from 'material-ui/styles'
import theme from './theme'

class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <MuiThemeProvider theme={theme}>
            <App />
          </MuiThemeProvider>
        </BrowserRouter>
      </Provider>
    )
  }
}

render(<Index />, document.querySelector('#app'))
