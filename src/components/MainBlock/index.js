import React, {PureComponent} from "react"
import PropTypes from 'prop-types'
import "./style.scss"
import {Route} from "react-router-dom"
import CSSTransition from 'react-addons-css-transition-group';

class Main_Block extends PureComponent {

  static propTypes = {
    title: PropTypes.string,
    exact: PropTypes.bool,
    path: PropTypes.string
  }

  state = {
    isHide: false
  }

  render() {
    const {path, exact} = this.props
    return path ? <Route exact={exact} path={path} render={() => this.body}/> : this.body
  }

  get body() {
    const {title, children} = this.props
    const {isHide} = this.state
    return (
      <CSSTransition
      transitionName="baseAnim"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}>

      <div key={title} className={isHide ? "main-block main-block--closed" : "main-block"}>
        {title ? 
          <h3 className="main-block__title">
            {title}
          </h3> : null}
        <div onClick={this.toggleBlock} className={!isHide ? "main-block__show-btn main-block__show-btn--up" : "main-block__show-btn main-block__show-btn--down"}></div>
        {children}
      </div>
      </CSSTransition>)
  }

  toggleBlock = () => {
    this.setState({
      isHide: !this.state.isHide
    })
  }
}

export default Main_Block