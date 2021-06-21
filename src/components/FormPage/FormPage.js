import React from "react";
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import ClearButton from "./ClearButton/ClearButton"
import ProductName from "./ProductSpecifications/ProductName/ProductName"
import ProductFields from "./ProductSpecifications/ProductFields/ProductFields"
import ProductRating from "./ProductSpecifications/ProductRating/ProductRating"
import ProductImageSearch from "./ProductImageSearch/ProductImageSearch"
import PurchasePrice from "./ProductSpecifications/PurchasePrice/PurchasePrice"
import ProductCategory from "./ProductSpecifications/ProductCategory/ProductCategory"
import ServingCount from "./ProductSpecifications/ServingCount/ServingCount"
import FindProductPrompt from "./FindProductPrompt/FindProductPrompt"
import DatePurchased from "./ProductSpecifications/DatePurchased/DatePurchased"
import SubmitButton from "./SubmitButton/SubmitButton"
import useStyles from "./styles.js";
import FormLogic from "./FormLogic"

const FormPage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <FindProductPrompt showPopup={props.showPopup} setShowPopup={props.setShowPopup} />

      <ProductImageSearch
        updateImageState={(newImg) => props.handleChange({ target: { name: "image", value: newImg } })}
        currentImage={props.thisGrocery.image}>
      </ProductImageSearch>

      <form className={classes.form} noValidate>
        <div className={classes.itemDetails}>
          <ProductName
            value={props.thisGrocery["name"]}
            name={"name"}
            handleChange={props.handleChange}
            thisClass={classes.itemName}>
          </ProductName>

          <ProductCategory
            setCurrentNotification={props.setCurrentNotification}
            handleChange={props.handleChange}
            thisGrocery={props.thisGrocery}
            setThisGrocery={props.setThisGrocery}>
          </ProductCategory>

          <ProductRating rating={parseInt(props.thisGrocery.priority)} handleChange={props.handleChange} />

          <ClearButton
            handleClick={() => props.handleClear(props.handleClear, props.editSelection)}
            editSelection={props.editSelection}>
          </ClearButton>

          <SubmitButton handleSubmit={props.handleSubmit}
            searchSelection={props.searchSelection}
            disableAdd={props.disableAdd}>
          </SubmitButton>

          <hr /><hr />

          <div className={classes.importantFields}>
            <PurchasePrice handleChange={props.handleChange} thisGrocery={props.thisGrocery} />
            <ServingCount handleChange={props.handleChange} thisGrocery={props.thisGrocery} />
          </div>
        </div>

        <ProductFields thisGrocery={props.thisGrocery} handleChange={props.handleChange} />
        <DatePurchased thisGrocery={props.thisGrocery} handleChange={props.handleChange} />
      </form>
    </div>
  );
};

const WithLogic = () => {
  return (<FormLogic Component={FormPage} />)
}

export default withAuthRedirect(WithLogic)
