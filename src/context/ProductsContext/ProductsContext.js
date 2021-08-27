import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as savedItemData from 'api/firebase/saved';
// import * as ProductsData from 'api/firebase/products';
import groceryCategories from 'config/schema/groceryCategories';
export const ProductsContext = React.createContext();

const placeholderObj = {};
for (const cat in groceryCategories) {
  placeholderObj[groceryCategories[cat]] = {};
}

export function ProductsProvider({ children }) {
  const [savedProducts, setSavedProducts] = useState(placeholderObj);
  const [externalProducts, setExternalProducts] = useState(placeholderObj);
  const [loading, setLoading] = useState(false);

  function fetchCategoryDocs(categoryID, isSavedItems) {
    setLoading(true);
    if (isSavedItems) {
      savedItemData.fetchCategory(categoryID, docList => {
        const categoryObj = {};
        docList.forEach(product => (
          categoryObj[product['_id']] = product
        ));
        setSavedProducts(prevProducts => ({
          ...prevProducts,
          [categoryID]: categoryObj,
        }));
        setLoading(false);
      });
    } else {
      console.log('Fetch the external products in ProductsContext line:33');
      console.log(setExternalProducts);
      // externalItemData.fetchCategory(categoryID, docList => {
      //   const categoryObj = {};
      //   docList.forEach(product => (
      //     categoryObj[product['_id']] = product
      //   ));

      //   setSavedProducts(prevProducts => ({
      //     ...prevProducts,
      //     [categoryID]: categoryObj,
      //   }));
      //   setLoading(false);
      // });
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
      console.log(item);
      // setSavedProducts(prevProducts => {
      //   const obj = { ...prevProducts };
      //   obj[categoryID][item['_id']] = item;
      //   return obj;
      // });
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
