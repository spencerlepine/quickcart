import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'components/ui/Popup/Popup';
import TextField from '@material-ui/core/TextField';
import ProductPriceInput from './ProductPriceInput/ProductPriceInput';
import ProductSizeInput from './ProductSizeInput/ProductSizeInput';
import DeleteButton from './DeleteButton/DeleteButton';
import SubmitButton from './SubmitButton/SubmitButton';
import ProductCategoryInput from './ProductCategoryInput/ProductCategoryInput';
import BrandSearchInput from './BrandSearchInput/BrandSearchInput';
import ServingsPerInput from './ServingsPerInput/ServingsPerInput';
import ServingSizeInput from './ServingSizeInput/ServingSizeInput';
import useStyles from './styles.js';

const ProductInfoEntry = props => {
  const {
    setFormEntries,
    name,
    purchase_size,
    purchase_price,
    serving_size,
    servings_per,
    handleSubmit,
    handleDelete,
    brand,
    cateogry,
  } = props;

  const classes = useStyles();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormEntries(prevEntries => ({
      ...prevEntries,
      [name]: value,
    }));
  };

  const fieldsProps = {
    onChange: handleChange,
    variant: 'outlined',
    margin: 'normal',
    required: true,
    fullWidth: true,
  };

  return (
    <div className={`productInfoEntry ${classes.formContainer}`}>
      <Popup
        DefaultElem={(
          <div>
            <p>Search Products?</p>
            <p>Scan UPC? Products?</p>
          </div>
        )}
        PopupElem={(<React.Fragment></React.Fragment>)}
      />

      <form className={classes.productInfoForm}>
        <div className={classes.nameContainer}>
          < TextField
            {...fieldsProps}
            className={classes.xyz}
            type={'name'}
            name={'name'}
            placeholder={'Product Name'}
            value={name}
          />
        </div>

        <section className={classes.purchaseContainer}>
          <ProductPriceInput purchase_price={purchase_price} fieldsProps={fieldsProps} />

          <ProductSizeInput purchase_size={purchase_size} fieldsProps={fieldsProps} />
        </section>

        <section className={classes.formButtonsContainer}>
          <DeleteButton handleDelete={handleDelete} />

          <SubmitButton handleSumit={handleSubmit} />
        </section>

        <section className={classes.categoryContainer}>
          <ProductCategoryInput cateogry={cateogry} handleChange={handleChange} />

          <BrandSearchInput brand={brand} handleChange={handleChange} />
        </section>

        <section className={classes.servingContainer}>
          <ServingsPerInput servings_per={servings_per} handleChange={handleChange} />

          <ServingSizeInput serving_size={serving_size} handleChange={handleChange} />
        </section>
      </form>
    </div >
  );
};

export default ProductInfoEntry;

ProductInfoEntry.propTypes = {
  setFormEntries: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  purchase_size: PropTypes.object.isRequired,
  purchase_price: PropTypes.number.isRequired,
  serving_size: PropTypes.object.isRequired,
  servings_per: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  cateogry: PropTypes.func.isRequired,
};
