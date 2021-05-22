import React from "react"
import useStyles from "./styles"

const CardGrid = ({ cardItems }) => {
  const classes = useStyles()

  return (
    <div className={classes.cardGrid}>
        {cardItems}
    </div>
  )
}

export default CardGrid
