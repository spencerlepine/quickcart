import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../../actions/categories"
import CategorySelector from "./CategorySelector/CategorySelector"
import useStyles from "./styles"

const CategoryLabels = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const categories = useSelector(state => state.categories)
  const authKey = useSelector(state => state.authentication)

  useEffect(() => {
    dispatch(fetchCategories(authKey))
  }, [])

  const categoryComponents = categories.map((category, i) => (
    <CategorySelector categoryName={category["_id"]} key={i} selectionValue={category["_id"]} />
  ))

  return (
    <div className={classes.categoriesContainter}>
      <CategorySelector categoryName="all" selectionValue={null} />
      {categoryComponents}
    </div>
  )
}

export default CategoryLabels
