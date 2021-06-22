import React, { useEffect } from "react"
import useStyles from "./styles.js";
import toTitleCase from "../../../../../../modules/toTitleCase";
import CircularProgress from '@material-ui/core/CircularProgress';
import useFoodFacts from "../../../../../../context/FoodFactsContext/FoodFactsContext";
import useSpoonacular from "../../../../../../context/SpoonacularContext/SpoonacularContext";
import madShiba from "../../../../../../images/mad_shiba.png"

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
  }

  useEffect(() => {
    // Load up the details
    retreiveFieldInfo(fieldName, UPC, ID, name)
  }, [])

  const DisplaySearch = () => {
    if (spoonacularIdResult
      || spoonacularNameResult
      || spoonacularUpcResult
      || foodFactsIdResult
      || foodFactsNameResult
      || foodFactsUpcResult) {
      return (
        <div className={classes.valueSelector}>
          <p>{toTitleCase(fieldName)}</p>
          <p>{spoonacularIdResult}</p>
          <p>{spoonacularNameResult}</p>
          <p>{spoonacularUpcResult}</p>
          <p>{foodFactsIdResult}</p>
          <p>{foodFactsNameResult}</p>
          <p>{foodFactsUpcResult}</p>
        </div>
      )
    } else {
      return (
        <>
          <img src={madShiba} className={classes.failureImg} alt="Missing product"></img>
          <p className={classes.failureMsg}>Sorry,<br /> this product was hard to find :(</p>
        </>)
    }
  }

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
            <DisplaySearch />
          }</>
        </div>
      </div>
    </div>
  )
}

export default ValueSearcher