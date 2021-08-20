import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductInfoEntry from './ProductInfoEntry/ProductInfoEntry';
import ThumbnailUploader from './ThumbnailUploader/ThumbnailUploader';
import useStyles from './styles.js';

const FormContainer = ({ item }) => {
  const classes = useStyles();

  const [formEntries, setFormEntries] = useState(item);

  const handleDelete = () => {
    console.log('FORM: HERE DELETE THE PRODUCT OR CLEAR IT');
  };

  const handleSubmit = () => {
    console.log(formEntries);
    console.log('FORM: HERE SUBMIT THE NEW PRODUCT');
  };

  const handleImageChange = newImg => {
    setFormEntries(prevEntries => ({
      ...prevEntries,
      image: newImg,
    }));
  };

  return (
    <div className={`form-view-container ${classes.formViewContainer}`}>
      <ThumbnailUploader currentImage={formEntries['image']} handleImageChange={handleImageChange} />

      <ProductInfoEntry
        setFormEntries={setFormEntries}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
        name={item['name']}
        purchase_size={item['purchase_size']}
        purchase_price={item['purchase_price']}
        serving_size={item['serving_size']}
        servings_per={item['servings_per']}
        brand={item['brand']}
        cateogry={item['category']}
      />
    </div >
  );
};

export default FormContainer;

FormContainer.propTypes = {
  item: PropTypes.object.isRequired,
};
