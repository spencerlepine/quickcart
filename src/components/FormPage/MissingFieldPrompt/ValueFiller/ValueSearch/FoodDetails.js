import React from "react"
import useForm from "../../../../../../context/FormContext/FormContext"
import { useHistory } from "react-router-dom"
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PriceIndicator from "./PriceIndicator"
import useStyles from "./styles"
import ScoreElement from "./ScoreElement/ScoreElement"

const FoodDetails = ({ groceryItem, handleAdd }) => {
  const classes = useStyles()
  const history = useHistory()
  const { setEditSelection } = useForm()

  return (
    <>
      <p>Some value</p>
    </>
  )
}

export default FoodDetails