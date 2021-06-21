import React from "react"
import FoodDetails from "../../FoodDetails/FoodDetails"

const SearchItemDetails = ({ product, handleAdd }) => {
  // const history = useHistory()
  // const { setEditSelection } = useForm()

  // const handleEdit = (e) => {
  //   setEditSelection(groceryItem)
  //   history.push("/form")
  // }

  return (
    <FoodDetails groceryItem={product} handleAdd={() => { }} />
  )
}

export default SearchItemDetails