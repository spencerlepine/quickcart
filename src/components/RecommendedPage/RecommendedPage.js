import React from "react"
import CategoryCards from "./CategoryCards/CategoryCards.js"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import useStyles from "./styles.js"
import useRecommended from "../../context/RecommendedContext/RecommendedContext.js"

const RecommendedPage = () => {
  const classes = useStyles()

  const { allRecommendedItems } = useRecommended()

  const groupedItems = {}
  allRecommendedItems.forEach(itemObj => {
    let thisCategoryList = groupedItems[itemObj.category]
    if (thisCategoryList) {
      thisCategoryList.push(itemObj)
    } else {
      thisCategoryList = [itemObj]
    }
  })

  const categorySliders = []
  for (const category in groupedItems) {
    let thisItemArray = groupedItems[category]
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
