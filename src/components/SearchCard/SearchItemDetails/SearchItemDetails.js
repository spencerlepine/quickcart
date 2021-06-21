import React from "react"
import FoodDetails from "../../FoodDetails/FoodDetails"
import formatGroceryObj from "../../../modules/formatGroceryObj"

const SearchItemDetails = ({ product, handleAdd }) => {
  const formattedProduct = formatGroceryObj(product)
  // const history = useHistory()
  // const { setEditSelection } = useForm()

  // const handleEdit = (e) => {
  //   setEditSelection(groceryItem)
  //   history.push("/form")
  // }

  return (
    <FoodDetails groceryItem={formattedProduct} handleAdd={() => { }} />
  )
}

export default SearchItemDetails