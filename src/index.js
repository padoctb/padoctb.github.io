import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store/'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import ScrollToTop from "./tools/misc/scrollToTop.js"

ReactDOM.render(<Provider store={store}><HashRouter><ScrollToTop><App/></ScrollToTop></HashRouter></Provider>, document.getElementById('root'));
