import React from 'react';
import useFoodFacts from '../../../context/FoodFactsContext/FoodFactsContext.js';
import missingImage from '../../../images/missing.jpeg';
import useStyles from './styles.js';

// useful keys
// product_name_en
// _keywords
// image_ingredients_url
// ingredients_text
// selected_images
// image_small_url
// image_small_url
// ?
// nutrition_data_prepared_per

// nutrition_grade_en

const UPCResult = () => {
  const classes = useStyles();
  const { itemUPCSearch } = useFoodFacts();

  if (itemUPCSearch) {
    const itemName = itemUPCSearch['product_nameen'] || itemUPCSearch['product_name'] || itemUPCSearch['generic_name'];
    const itemBrand = itemUPCSearch['brands'] || 'unknown';
    const itemNetWeight = itemUPCSearch['net_weight_value'] || itemUPCSearch['net_weight_unit'] || itemUPCSearch['volume_unit'] || 'n/a';
    const itemCategory = itemUPCSearch['main_category']; // || itemUPCSearch['categories'];
    const itemImageURL = itemUPCSearch['image_url'] || itemUPCSearch['image_small_url'] || missingImage;
    const itemServingQuantity = itemUPCSearch['serving_quantity'];
    const itemServingSize = itemUPCSearch['serving_size'];
    const itemGrade = itemUPCSearch['nutrition_grade_en'] || itemUPCSearch['nutrition_grade_fr'];

    return (
      <div>
        <img src={itemImageURL} alt={itemName}></img>
        <h3>{itemName}</h3>
        <h4>Grade: {itemGrade}</h4>
        <p>{itemBrand}</p>
        <p>{itemUPCSearch.serving_quantity}</p>
        <p>{itemUPCSearch.serving_size}</p>
        <p>{itemCategory}</p>
        <hr />
        <p>{itemServingQuantity}</p>
        <p>{itemServingSize}</p>
        <p>Unit: {itemNetWeight}</p>
        <p>{itemUPCSearch.ingredients_text}</p>
        <p>UPC: {itemUPCSearch.code}</p>
      </div>
    );
  } else { return null; }
};

export default UPCResult;
