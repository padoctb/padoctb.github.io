import React, {Component} from "react"
import {Route, Redirect} from 'react-router-dom'
import MainBlock from './../components/MainBlock'
import CategoryMoviesList from './../components/CategoryMoviesList'
import getNormalizedTitle from './../tools/misc/getNormalizedTitle.js'

class CategoriesRoute extends Component {

  render() {
    return(
      <React.Fragment>
        <Route exact path={`/category/:category`} render={({match}) => {
          return <Redirect to={`/category/${match.params.category}/1`}/>
        }}/>
        <Route exact path={`/category/:category/:page`} render={(props) => this.getCategoryList(props)}/>
      </React.Fragment>
    )
  }

  getCategoryList = ({match}) => {

    const {category, page} = match.params

    //get normalized title from get title (x_x = X X / xx = Xx)
    let categoryTitle = getNormalizedTitle(category)

    return (
      <MainBlock key={page} title={categoryTitle}>
        <CategoryMoviesList page={page} categoryTitle={categoryTitle} categoryLoad={category}/>
      </MainBlock>)
  }
}

export default CategoriesRoute