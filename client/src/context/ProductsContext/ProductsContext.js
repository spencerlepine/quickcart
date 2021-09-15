import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as savedItemData from 'api/firebase/saved';
import * as productsItemData from 'api/firebase/products';
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

  const value = {
    loading,
    fetchCategoryDocs,
    fetchDocByID,
    savedProducts,
    addSavedProduct,
    externalProducts,
    deleteSavedProduct,
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

const useProducts = () => {
  const {
    loading,
    fetchCategoryDocs,
    fetchDocByID,
    savedProducts,
    addSavedProduct,
    deleteSavedProduct,
    externalProducts,
  } = useContext(ProductsContext);

  return {
    fetchCategoryDocs,
    fetchDocByID,
    savedProducts,
    loading,
    addSavedProduct,
    deleteSavedProduct,
    externalProducts,
  };
};

export default useProducts;

ProductsProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
