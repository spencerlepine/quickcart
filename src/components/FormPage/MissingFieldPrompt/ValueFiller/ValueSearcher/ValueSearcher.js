// popup component (info icon, missing name field!)
// search products?


// pass in handleChange, fieldName, upc, id, name
// get foodfactscontext, get spoonacular context

import React, { useEffect } from "react"
import useStyles from "./styles.js";
import toTitleCase from "../../../../../modules/toTitleCase";
import CircularProgress from '@material-ui/core/CircularProgress';
import useFoodFacts from "../../../../../context/FoodFactsContext/FoodFactsContext";
import useSpoonacular from "../../../../../context/SpoonacularContext/SpoonacularContext";

const ValueSearcher = ({ handleChange, fieldName, UPC, ID, name }) => {
  const classes = useStyles();

  const {
    idFeildResult: foodFactsIdResult,
    nameFeildResult: foodFactsNameResult,
    upcFeildResult: foodFactsUpcResult,
    fieldFromId: foodFactsId,
    fieldFromName: foodFactsName,
    fieldFromUPC: foodFactsUPC,
    loading: foodFactsLoading
  } = useFoodFacts()

  const {
    idFeildResult: spoonacularIdResult,
    nameFeildResult: spoonacularNameResult,
    upcFeildResult: spoonacularUpcResult,
    fieldFromId: spoonacularId,
    fieldFromName: spoonacularName,
    fieldFromUPC: spoonacularUPC,
    loading: spoonLoading
  } = useSpoonacular()

  // Save the chosen value, CLOSE search
  const handleClick = (chosenValue) => {
    handleChange({ target: { name: "name", value: chosenValue } })
  }

  const retreiveFieldInfo = async (fieldName, UPC, ID, name) => {
    // search upc, name, and id in both dumps
    await foodFactsUPC(UPC, fieldName);
    await spoonacularUPC(UPC, fieldName);
    await foodFactsName(name, fieldName);
    await spoonacularName(name, fieldName);
    await foodFactsId(ID, fieldName);
    await spoonacularId(ID, fieldName);

    // Use the data and handle it
    console.log(spoonacularIdResult);
    console.log(spoonacularNameResult);
    console.log(spoonacularUpcResult);
    console.log(foodFactsIdResult);
    console.log(foodFactsNameResult);
    console.log(foodFactsUpcResult);
  }

  useEffect(() => {
    // Load up the details
    retreiveFieldInfo(fieldName, UPC, ID, name)
  }, [])

  // get list of values
  // prompt user to USE the value
  // Generate a list of the options
  // Set purchase price:
  // Find best match?
  // 3.40 SELECT
  // 2.40 SELECT

  // Update with loading state
  const loading = foodFactsLoading || spoonLoading;
  return (
    <div className={classes.popupContainer}>
      <div className={classes.popupElement}>
        <div className={classes.productGrid}>
          <>{loading
            ?
            <CircularProgress />
            :
            <div className={classes.valueSelector}>
              <p>{toTitleCase(fieldName)}</p>
            </div>
          }</>
        </div>
      </div>
    </div>
  )
}

export default ValueSearcher