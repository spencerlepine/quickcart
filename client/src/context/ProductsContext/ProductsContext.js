import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as savedItemData from 'api/firebase/saved';
import * as productsItemData from 'api/firebase/products';
import * as spoonacularApi from 'api/spoonacular';
import groceryCategories from 'config/schema/groceryCategories';
export const ProductsContext = React.createContext();

const placeholderSaved = {};
const placeholderExternal = {};
for (const cat in groceryCategories) {
  placeholderSaved[groceryCategories[cat]] = {};
  placeholderExternal[groceryCategories[cat]] = {};
}

export function ProductsProvider({ children }) {
  const [savedProducts, setSavedProducts] = useState(placeholderSaved);
  const [externalProducts, setExternalProducts] = useState(placeholderExternal);
  const [loading, setLoading] = useState(false);
  const [lastSavedID, setLastSavedID] = useState({});
  const [lastExternalID, setLastExternalID] = useState({});

  function fetchCategoryDocs(categoryID, isSavedItems) {
    setLoading(true);
    if (isSavedItems) {
      savedItemData.fetchCategory(categoryID, lastSavedID[categoryID], docList => {
        const categoryObj = savedProducts[categoryID];

        if (docList.length > 0) {
          docList.forEach(product => (
            categoryObj[product['_id']] = product
          ));
          setLastSavedID(prevObj => ({ ...prevObj, [categoryID]: docList[docList.length - 1]['_id'] }));
        }

        setSavedProducts(prevProducts => ({
          ...prevProducts,
          [categoryID]: categoryObj,
        }));
        setLoading(false);
      });
    } else {
      productsItemData.fetchCategory(categoryID, lastExternalID[categoryID], docList => {
        const categoryObj = externalProducts[categoryID];

        if (docList.length > 0) {
          docList.forEach(product => (
            categoryObj[product['_id']] = product
          ));
          setLastExternalID(prevObj => ({ ...prevObj, [categoryID]: docList[docList.length - 1]['_id'] }));
        }
        setExternalProducts(prevProducts => ({
          ...prevProducts,
          [categoryID]: categoryObj,
        }));
        setLoading(false);
      });
    }
  }

  function fetchDocByID(itemID, categoryID) {
    setLoading(true);
    savedItemData.fetchItem(itemID, categoryID, itemDoc => {
      setSavedProducts(prevProducts => {
        const obj = { ...prevProducts };
        obj[categoryID][itemID] = itemDoc;
        return obj;
      });
      setLoading(false);
    });
  }

  function addSavedProduct(newItem, categoryID) {
    setLoading(true);
    savedItemData.createItem(newItem, categoryID, item => {
      setSavedProducts(prevProducts => {
        const obj = { ...prevProducts };
        obj[categoryID][item['_id']] = item;
        return obj;
      });
      setLoading(false);
    });
  }

  function deleteSavedProduct(itemID, categoryID) {
    setLoading(true);
    savedItemData.deleteItem(itemID, categoryID, item => {
      setSavedProducts(prevProducts => {
        const obj = { ...prevProducts };
        delete obj[categoryID][itemID];
        return obj;
      });
      setLoading(false);
    });
  }

  function extendExistingProduct(newProduct, setProductList) {
    const { category: categoryID, _id: productId } = newProduct;
    if ((categoryID || 'other') && productId && setProductList) {
      setProductList(prevProducts => {
        const obj = { ...prevProducts };
        const existingProduct = obj[categoryID][productId] || {};

        obj[categoryID || 'other'][productId] = {
          ...existingProduct,
          ...newProduct,
        };

        return obj;
      });
    }
  }

  function getNutritionDetails(productId, categoryID, isExternalProduct) {
    setLoading(true);
    spoonacularApi.fetchProductDetails(productId, nutritionObj => {
      const updatedValues = {
        _id: productId,
        category: categoryID,
        nutritionFacts: nutritionObj,
      };

      if (nutritionObj) {
        if (isExternalProduct) {
          extendExistingProduct(updatedValues, setExternalProducts);
        } else {
          extendExistingProduct(updatedValues, setSavedProducts);
        }
      }
      setLoading(false);
    });
  }

  function searchSavedProducts(query) {
    setLoading(true);
    savedItemData.queryDatabase(query, docList => {
      docList.forEach(product => {
        extendExistingProduct(product, setSavedProducts);
      });
      setLoading(false);
    });
  }

  function searchExternalProducts(query) {
    setLoading(true);
    productsItemData.queryDatabase(query, docList => {
      docList.forEach(product => {
        extendExistingProduct(product, setExternalProducts);
      });
      setLoading(false);
    });
  }

  const value = {
    loading,
    fetchCategoryDocs,
    fetchDocByID,
    savedProducts,
    addSavedProduct,
    externalProducts,
    deleteSavedProduct,
    getNutritionDetails,
    searchExternalProducts,
    searchSavedProducts,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

const useProducts = () => useContext(ProductsContext);

export default useProducts;

ProductsProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
