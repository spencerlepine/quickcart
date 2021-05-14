import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../../actions/categories"
import CategorySelector from "./CategorySelector/CategorySelector"
import useStyles from "./styles"

const CategoryLabels = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const categories = useSelector(state => state.categories)
  const userId = useSelector(state => state.connectedUser)

  useEffect(() => {
    dispatch(fetchCategories(userId))
  }, [])

  const categoryComponents = categories.map((category, i) => (
    <CategorySelector categoryName={category} key={i} />
  ))

  return (<>
    {categories.length > 0 &&
      (<div className={classes.categoriesContainter}>
        <CategorySelector categoryName="all" selectionValue={null} />
        {categoryComponents}
      </div>)
    }
  </>)
}

export default CategoryLabels
