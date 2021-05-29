import React, { useEffect } from "react"
import CategoryCards from "./CategoryCards/CategoryCards.js"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import useStyles from "./styles.js"
import useRecommended from "../../context/RecommendedContext/RecommendedContext.js"

const RecommendedPage = () => {
  const classes = useStyles()

  const { allRecommendedItems, getAllRecommendedItems } = useRecommended()

  useEffect(() => {
    getAllRecommendedItems()
  }, [])

  const categorySliders = []
  for (const category in allRecommendedItems) {
    let thisItemArray = allRecommendedItems[category]
    categorySliders.push(<CategoryCards categoryItems={thisItemArray} />)
  }

  return (
    <div className={classes.gridView}>
      <h3>Cart Recommendations</h3>
      <hr />
      {categorySliders}
    </div>
  )
}

export default withAuthRedirect(RecommendedPage)
