import React, {Component} from "react"
import PropTypes from 'prop-types'
import {loadCategoryMoviesList} from "./../../action_creators"
import {connect} from "react-redux"
import Loader from "./../Loader"
import {
  getCategoryMoviesList,
  getCategoryMoviesTotalPages
} from "./../../selectors"
import MoviesListBlock from "./../MoviesListBlock/"
import MoviePreview from "./../MoviePreview/"
import Pagination from "./../Pagination"


class CategoryMoviesList extends Component {

  static propTypes = {
    page: PropTypes.string.isRequired,
    categoryTitle: PropTypes.string.isRequired,
    categoryLoad: PropTypes.string.isRequired,
    movies: PropTypes.object,
    totalPages: PropTypes.number
  } 

  render() {
    return(
      <React.Fragment>
        {this.body}
      </React.Fragment>
    )
  }

  get body() {
    const {movies, totalPages, page, categoryLoad} = this.props

    if(!movies) return <Loader/>;

    const body = movies.valueSeq().toArray().map((elem, i) => {
      return <li key={elem.id}><MoviePreview link={`/movies/${elem.id}`} posterWidth={220} movieData={elem}/></li>
    })

    return (
      <React.Fragment>
        <MoviesListBlock>
          {body}
        </MoviesListBlock>
        <Pagination link={`/category/${categoryLoad}/`} totalPages={totalPages} currentPage={page}/>
      </React.Fragment>
    )
  }

  componentDidMount() {
    const {categoryLoad, page, movies, totalPages} = this.props

    if(!movies) this.props.loadCategoryMoviesList(categoryLoad, page, totalPages)
  }
}

export default connect((store, ownProps) => {
  return {
    movies: getCategoryMoviesList(store, ownProps),
    totalPages: getCategoryMoviesTotalPages(store, ownProps)
  }
}, {
  loadCategoryMoviesList
})(CategoryMoviesList)