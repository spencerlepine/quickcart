import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import useProducts from 'context/ProductsContext/ProductsContext';
import { useHistory } from 'react-router-dom';
import { SAVED } from 'config/constants/routeConstants';
export const FormContext = React.createContext();

const placeholderItem = {
  name: '',
  purchase_size: {
    count: 1,
    unit: 'unit',
  },
  purchase_price: 0,
  serving_size: {
    count: 1,
    unit: 'unit',
  },
  servings_per: 1,
  brand: '',
  category: 'other',
};

export function FormProvider({ children }) {
  const [formEntries, setFormEntries] = useState(placeholderItem);
  const { addSavedProduct, deleteSavedProduct } = useProducts();

  const [editingMode, setEditingMode] = useState(false);
  const [isExternal, setIsExternal] = useState(false);

  const history = useHistory();

  const handleDelete = e => {
    e.preventDefault();
    if (editingMode && !isExternal) {
      console.log('calling', deleteSavedProduct);
      const item = Object.assign({}, formEntries);
      if (!(item && Object.keys(item).length === 0 && item.constructor === Object)) {
        setEditingMode(false);
        setIsExternal(false);
        setFormEntries({});
        deleteSavedProduct(item['_id'], item['category']);
        history.push(SAVED);
      }
    } else {
      setFormEntries({});
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const item = Object.assign({}, formEntries);
    if (!(item && Object.keys(item).length === 0 && item.constructor === Object)) {
      setEditingMode(false);
      setIsExternal(false);
      setFormEntries({});
      addSavedProduct(item, item['category']);
      history.push(SAVED);
    }
  };

  const handleImageChange = newImg => {
    setFormEntries(prevEntries => ({
      ...prevEntries,
      image: newImg,
    }));
  };

  const value = {
    formEntries,
    setFormEntries,
    handleImageChange,
    handleSubmit,
    handleDelete,
    setEditingMode,
    isExternal,
    editingMode,
    setIsExternal,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

const useForm = () => {
  const {
    formEntries,
    setFormEntries,
    handleImageChange,
    handleSubmit,
    handleDelete,
    setEditingMode,
    setIsExternal,
    isExternal,
    editingMode,
  } = useContext(FormContext);

  return {
    formEntries,
    setFormEntries,
    handleImageChange,
    handleSubmit,
    handleDelete,
    setEditingMode,
    setIsExternal,
    isExternal,
    editingMode,
  };
};

export default useForm;

FormProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
