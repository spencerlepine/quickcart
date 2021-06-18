import React, { useEffect } from "react"
import CategoryCards from "./CategoryCards/CategoryCards.js"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import useStyles from "./styles.js"
import useRecommended from "../../context/RecommendedContext/RecommendedContext.js"
import CircularProgress from '@material-ui/core/CircularProgress';

const RecommendedPage = () => {
  const classes = useStyles()

  const { allRecommendedItems, getAllRecommendedItems, loading } = useRecommended()

  useEffect(() => {
    getAllRecommendedItems()
  }, [])

  const categorySliders = []
  for (const category in allRecommendedItems) {
    let thisItemArray = allRecommendedItems[category]
    categorySliders.push(<CategoryCards key={category} categoryItems={thisItemArray} />)
  }

  return (
    <div className={classes.gridView}>
      <h3>Cart Recommendations</h3>
      <hr />
      {loading
        ?
        <CircularProgress />
        :
        <>
          {categorySliders}
        </>}
    </div>
  )
}

export default withAuthRedirect(RecommendedPage)
