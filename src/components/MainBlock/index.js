import React, {Component} from "react"
import PropTypes from 'prop-types'
import "./style.scss"

class Main_Block extends Component {

  static propTypes = {
    title: PropTypes.string
  } 

  render() {
    const {title} = this.props
    return(
      <div className="main-block">
        {title ? 
          <h3 className="main-block__title">
            {title}
          </h3> : null}
        {this.props.children}
      </div>
    )
  }
}

export default Main_Block