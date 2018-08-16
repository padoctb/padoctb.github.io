import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store/'
import {Provider} from 'react-redux'
import ScrollToTop from "./tools/misc/scrollToTop.js" //(for r-router links)
import { ConnectedRouter } from 'connected-react-router'
import history from "./history"

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ScrollToTop>
        <App/>
      </ScrollToTop>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
