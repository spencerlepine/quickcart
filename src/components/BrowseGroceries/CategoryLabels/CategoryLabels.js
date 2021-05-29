import React, { useEffect } from "react"
import useCategories from "../../../context/CategoriesContext/CategoriesContext.js"
import CategorySelector from "./CategorySelector/CategorySelector"
import useStyles from "./styles"

const CategoryLabels = () => {
  const classes = useStyles()

  const { getAllCategories, allCategories } = useCategories()

  useEffect(() => {
    getAllCategories()
  }, [])

  const categoryComponents = allCategories.map((category, i) => (
    <CategorySelector categoryName={category} key={i} selectorValue={category} />
  ))

  return (<>
    {categoryComponents.length > 0 &&
      (<div className={classes.categoriesContainter}>
        <CategorySelector categoryName="all" selectorValue={null} />
        {categoryComponents}
      </div>)
    }
  </>)
}

export default CategoryLabels
