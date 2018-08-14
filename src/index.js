import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './store/'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import ScrollToTop from "./tools/misc/scrollToTop.js"

ReactDOM.render(<Provider store={store}><BrowserRouter><ScrollToTop><App/></ScrollToTop></BrowserRouter></Provider>, document.getElementById('root'));
