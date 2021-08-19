import React from 'react';
import { useHistory } from 'react-router-dom';
import { CREATE } from 'config/constants/routeConstants';
import useStyles from './styles.js';

const EditItemButton = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    // setEditSelection(groceryItem);
    console.log('HERE, SEND THIS ITEM TO THE FORM');
    history.push(CREATE);
  };

  return (
    <div className='edit-item-button'>
      <button className={classes.editItemBtn} onClick={handleClick}>Edit Item</button>
    </div>
  );
};

export default EditItemButton;
