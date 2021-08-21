import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as savedItemData from 'api/firebase/saved';
// import * as ProductsData from 'api/firebase/products';

export const ProductsContext = React.createContext();

export function ProductsProvider({ children }) {
  const [savedProducts, setSavedProducts] = useState({});
  const [loading, setLoading] = useState(false);

  function fetchCategoryDocs(categoryID, savedItems) {
    setLoading(true);
    if (savedItems) {
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
      console.log('HERE, FETCHING THE EXTERNAL PRODUCTS');
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
        obj[itemID['category']][itemID['_id']] = itemDoc;
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
  };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

const useProducts = () => {
  const {
    loading,
    fetchCategoryDocs,
    fetchDocByID,
    savedProducts,
  } = useContext(ProductsContext);

  return {
    fetchCategoryDocs,
    fetchDocByID,
    savedProducts,
    loading,
  };
};

export default useProducts;

ProductsProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
