import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useProducts from 'context/ProductsContext/ProductsContext';
import { NutritionLabel } from 'react-fda-nutrition-facts';
import hasNutritionData from './hasValidNutritionFacts';

const NutritionFacts = ({ productId, categoryID, isExternalProduct, nutFacts, servingSize = null, servingQuantity = null }) => {
  const [showNutritionFacts, setShowNutritionFacts] = useState(false);
  const { fetchNutritionDetails } = useProducts();

  useEffect(() => {
    const validNutrition = hasNutritionData(nutFacts);
    setShowNutritionFacts(validNutrition);
  }, [nutFacts]);

  if (showNutritionFacts) {
    return (
      <NutritionLabel
        servingSize={servingSize || nutFacts.serving_size}
        servingsPerContainer={servingQuantity || nutFacts.serving_quantity || 1}
        calories={Math.round(nutFacts.energy * 0.23900573614) || 0}
        totalFat={nutFacts.fat || 0}
        saturatedFat={nutFacts['saturated-fat'] || 0}
        transFat={nutFacts['trans_fat'] || 0}
        cholesterol={nutFacts.cholesterol || 0}
        sodium={nutFacts.sodium || 0}
        totalCarbs={nutFacts['carbohydrates_serving'] || 0}
        dietaryFiber={nutFacts['fiber'] || 0}
        sugars={nutFacts.sugars || 0}
        protein={nutFacts.proteins || 0}
        vitaminA={nutFacts['vitamin-a'] || 0}
        vitaminC={nutFacts['vitamin-c'] || 0}
        calcium={nutFacts.calcium || 0}
        iron={nutFacts.iron || 0}
      />
    );
  } else {
    return (
      <>
        <p>Failed to load Nutrition Data</p>
        <button onClick={() => fetchNutritionDetails(productId, categoryID, isExternalProduct)}>Search Again</button >
      </>
    );
  }

};

export default NutritionFacts;

NutritionFacts.propTypes = {
  categoryID: PropTypes.string.isRequired,
  isExternalProduct: PropTypes.bool.isRequired,
  productId: PropTypes.string.isRequired,
  nutFacts: PropTypes.object.isRequired,
  servingSize: PropTypes.string.isRequired,
  servingQuantity: PropTypes.number.isRequired,
};
