import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { CREATE } from 'config/constants/routeConstants';
import useForm from 'context/FormContext/FormContext';
import useStyles from './styles.js';

const EditItemButton = ({ item, isExternalProduct }) => {
  const classes = useStyles();
  const history = useHistory();
  const { setFormEntries, setEditingMode, setIsExternal } = useForm();

  const handleClick = () => {
    setEditingMode(true);
    setIsExternal(isExternalProduct);
    setFormEntries(item);
    history.push(CREATE);
  };

  return (
    <div className='edit-item-button'>
      <button className={classes.editItemBtn} onClick={handleClick}>
        {isExternalProduct ? 'Customize' : 'Edit'} Item</button>
    </div>
  );
};

EditItemButton.propTypes = {
  item: PropTypes.object.isRequired,
  isExternalProduct: PropTypes.bool.isRequired,
};

export default EditItemButton;
