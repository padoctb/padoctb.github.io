import React, {Component} from "react"
import {Route} from 'react-router-dom'
import MainBlock from './../components/MainBlock'
import CategoryMoviesList from './../components/CategoryMoviesList'

class CategoriesRoute extends Component {

  render() {
    return(
      <Route path={`/category/:category/:page`} render={(props) => this.getCategoryList(props)}/>
    )
  }

  getCategoryList = ({match}) => {

    const {category, page} = match.params

    let categoryTitle = category.split("_")
    categoryTitle = categoryTitle.map(elem => {
      return elem[0].toUpperCase() + elem.slice(1);
    })
    categoryTitle = categoryTitle.join(" ")

    return (
      <MainBlock key={page} title={categoryTitle}>
        <CategoryMoviesList page={page} categoryTitle={categoryTitle} categoryLoad={category}/>
      </MainBlock>)
  }
}

export default CategoriesRoute