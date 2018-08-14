import React, {Component} from "react"
import "./style.scss"

class PreviewMoviesBlock extends Component {
  render() {
    return(
      <React.Fragment>
        <ul className='preview-movies__items'>{this.props.children}</ul>
      </React.Fragment>
    )
  }
}

export default PreviewMoviesBlock