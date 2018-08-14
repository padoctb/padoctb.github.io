import React, {Component} from "react"
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import "./style.scss"

class Pagination extends Component {

  static propTypes = {
    link: PropTypes.string.isRequired,
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.string.isRequired
  } 

  render() {
    let {link, totalPages, currentPage} = this.props
    
    let prev = +currentPage - 1 <= 0 ? totalPages : +currentPage - 1
    let next = +currentPage + 1 > totalPages ? 1 : +currentPage + 1
    
    return(
      <React.Fragment>
        <div className="pagination">
        <Link to={link + prev} className="arrow left"></Link>

          Page <b>{currentPage}</b> of <b> {totalPages} 

        <Link to={link + next} className="arrow right"></Link></b></div>
      </React.Fragment>
    )
  }
}

export default Pagination