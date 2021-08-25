import React from 'react';
import ProductInfoEntry from './ProductInfoEntry/ProductInfoEntry';
import ThumbnailUploader from './ThumbnailUploader/ThumbnailUploader';
import useForm from 'context/FormContext/FormContext';
import useStyles from './styles.js';

const FormContainer = () => {
  const classes = useStyles();

  const { formEntries, setFormEntries, handleDelete, handleSubmit, handleImageChange, isExternal, editingMode } = useForm();

  return (
    <div className={`form-view-container ${classes.formViewContainer}`}>
      <ThumbnailUploader currentImage={formEntries['image']} handleImageChange={handleImageChange} />

      <ProductInfoEntry
        setFormEntries={setFormEntries}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
        isExternal={isExternal}
        editingMode={editingMode}
        {...formEntries}
      />
    </div >
  );
};

export default FormContainer;
