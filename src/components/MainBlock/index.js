import React, {PureComponent} from "react"
import PropTypes from 'prop-types'
import "./style.scss"
import {Route} from "react-router-dom"

class Main_Block extends PureComponent {

  static propTypes = {
    title: PropTypes.string,
    exact: PropTypes.bool,
    path: PropTypes.string
  } 

  render() {
    const {path, exact} = this.props
    return path ? <Route exact={exact} path={path} render={() => this.body}/> : this.body
  }

  get body() {
    const {title, children} = this.props
    return (<div className="main-block">
        {title ? 
          <h3 className="main-block__title">
            {title}
          </h3> : null}
        {children}
      </div>)
  }
}

export default Main_Block