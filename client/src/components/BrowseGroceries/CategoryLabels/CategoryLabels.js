import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchCategories } from "../../../actions/categories"
import CategorySelector from "./CategorySelector/CategorySelector"
import useStyles from "./styles"

const CategoryLabels = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const categories = useSelector(state => state.categories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const categoryComponents = categories.map((category, i) => (
    <CategorySelector categoryName={category["_id"]} key={i} selectionValue={category["_id"]} />
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
