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
import SearchPrompt from './SearchPrompt/SearchPrompt';
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
    isExternal,
    editingMode,
    category,
  } = props;

  const classes = useStyles();

  const handleChange = event => {
    let value = event.target.value;
    const { name, type } = event.target;
    if (type === 'number') {
      console.log(value);
      if (value === '') {
        value = 0;
      } else {
        value = Number(value);
      }
    }

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
        manualDisplay={!editingMode}
        DefaultElem={(<React.Fragment></React.Fragment>)}
        PopupElem={(<SearchPrompt />)}
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
          <ProductPriceInput purchase_price={parseFloat(purchase_price || 0)} fieldsProps={fieldsProps} />

          <ProductSizeInput unit={(purchase_size || {})['unit'] || 'unit'} count={(purchase_size || {})['count'] || 1} fieldsProps={fieldsProps} />
        </section>

        <section className={classes.formButtonsContainer}>
          <DeleteButton handleDelete={handleDelete} existingProduct={isExternal} />

          <SubmitButton handleSubmit={handleSubmit} editingMode={editingMode} />
        </section>

        <section className={classes.categoryContainer}>
          <ProductCategoryInput category={category} handleChange={handleChange} />

          <BrandSearchInput brand={brand} handleChange={handleChange} />
        </section>

        <section className={classes.servingContainer}>
          <ServingsPerInput servings_per={servings_per} handleChange={handleChange} fieldsProps={fieldsProps} />

          <ServingSizeInput unit={(serving_size || {})['unit'] || 'unit'} count={(serving_size || {})['count'] || 1} fieldsProps={fieldsProps} />
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
  name: PropTypes.string,
  purchase_size: PropTypes.object,
  purchase_price: PropTypes.number,
  serving_size: PropTypes.object,
  servings_per: PropTypes.number,
  brand: PropTypes.string,
  category: PropTypes.string.isRequired,
  editingMode: PropTypes.bool.isRequired,
  isExternal: PropTypes.bool.isRequired,
};
