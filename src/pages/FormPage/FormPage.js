import React from 'react';
import withAuthRedirect from '../../hooks/useAuthRedirect/useAuthRedirect';
import ClearButton from '../../components/ClearButton/ClearButton';
import ProductName from '../../components/ProductSpecifications/ProductName/ProductName';
import ProductRating from '../../components/ProductSpecifications/ProductRating/ProductRating';
import ProductImageSearch from '../../components/ProductImageSearch/ProductImageSearch';
import PurchasePrice from '../../components/ProductSpecifications/PurchasePrice/PurchasePrice';
import ProductCategory from '../../components/ProductSpecifications/ProductCategory/ProductCategory';
import ServingCount from '../../components/ProductSpecifications/ServingCount/ServingCount';
import FindProductPrompt from '../../components/FindProductPrompt/FindProductPrompt';
import DatePurchased from '../../components/ProductSpecifications/DatePurchased/DatePurchased';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import FormLogic from './FormLogic';
import MissingFieldPrompt from '../../components/MissingFieldPrompt/MissingFieldPrompt';
import SizeInput from '../../components/SizeInput/SizeInput';
import BrandSearchInput from '../../components/BrandSearchInput/BrandSearchInput';
import useStyles from './styles.js';

const FormPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
      <FindProductPrompt showPopup={props.showPopup} setShowPopup={props.setShowPopup} />
      <ProductImageSearch
        thisGrocery={props.thisGrocery}
        updateImageState={(newImg) => props.handleChange({ target: { name: 'image', value: newImg } })}
        currentImage={props.thisGrocery.image}>
      </ProductImageSearch>

      <form className={classes.form} noValidate>
        <div className={classes.itemDetails}>
          <ProductName
            value={props.thisGrocery['name']}
            name={'name'}
            handleChange={props.handleChange}
            thisClass={classes.itemName}>
          </ProductName>

          <div className={classes.importantFields}>
            <PurchasePrice handleChange={props.handleChange} thisGrocery={props.thisGrocery} />
            <ServingCount handleChange={props.handleChange} thisGrocery={props.thisGrocery} />
          </div>

          <ClearButton
            handleClick={() => props.handleClear(props.handleClear, props.editSelection)}
            editSelection={props.editSelection}>
          </ClearButton>

          <SubmitButton handleSubmit={props.handleSubmit}
            searchSelection={props.searchSelection}
            disableAdd={props.disableAdd}>
          </SubmitButton>

          <hr /><hr />

          <section className={classes.importantFields}>
            <ProductCategory
              setCurrentNotification={props.setCurrentNotification}
              handleChange={props.handleChange}
              thisGrocery={props.thisGrocery}
              setThisGrocery={props.setThisGrocery}>
            </ProductCategory>

            <ProductRating rating={parseInt(props.thisGrocery.priority)} handleChange={props.handleChange} />
          </section>
        </div>

        <section className={classes.sizeInputs}>
          <SizeInput
            setCurrentNotification={props.setCurrentNotification}
            handleChange={props.handleChange}
            thisGrocery={props.thisGrocery}
            setThisGrocery={props.setThisGrocery}
            thisKey={'purchase_size'}
          />

          <SizeInput
            setCurrentNotification={props.setCurrentNotification}
            handleChange={props.handleChange}
            thisGrocery={props.thisGrocery}
            setThisGrocery={props.setThisGrocery}
            thisKey={'serving_size'}
          />
        </section>

        <section className={classes.importantFields}>
          <BrandSearchInput thisGrocery={props.thisGrocery} handleChange={props.handleChange} />
        </section>
      </form>
    </div >
  );
};

const WithLogic = () => {
  return (<FormLogic Component={FormPage} />);
}

export default withAuthRedirect(WithLogic);