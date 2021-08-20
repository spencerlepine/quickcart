import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as savedData from 'api/firebase/saved';

export const SavedContext = React.createContext();

export function SavedProvider({ children }) {
  const [savedProducts, setSavedProducts] = useState({});
  const [loading, setLoading] = useState(false);

  function fetchCategoryDocs(categoryID) {
    setLoading(true);
    savedData.fetchCategory(categoryID, docList => {
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
  }

  function fetchDocByID(itemID, categoryID) {
    setLoading(true);
    savedData.fetchItem(itemID, categoryID, itemDoc => {
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

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>;
}

const useSaved = () => {
  const {
    loading,
    fetchCategoryDocs,
    fetchDocByID,
    savedProducts,
  } = useContext(SavedContext);

  return {
    fetchCategoryDocs,
    fetchDocByID,
    savedProducts,
    loading,
  };
};

export default useSaved;

SavedProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
