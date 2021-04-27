import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../../actions/categories"
import CategorySelector from "./CategorySelector/CategorySelector"
import useStyles from "./styles"

const Categories = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const categories = useSelector(state => state.categories)
  const authKey = useSelector(state => state.authentication)

  useEffect(() => {
    dispatch(fetchCategories(authKey))
  }, [])

  const categoryComponents = categories.map((category, i) => (
    <CategorySelector categoryName={category["_id"]} key={i} />
  ))

  return (
    <div className={classes.categoriesContainter}>
      <CategorySelector categoryName="None" />
      {categoryComponents}
    </div>
  )
}

export default Categories
