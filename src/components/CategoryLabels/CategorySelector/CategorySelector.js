import React from 'react';
import useSearch from '../../../context/SearchContext/SearchContext';
import useStyles from './styles';

const CategorySelector = ({ categoryName, selectorValue }) => {
  const classes = useStyles();
  const { setCategorySelection, categorySelection } = useSearch();

  const handleSelection = () => {
    // Set the global selected category to this name
    setCategorySelection(selectorValue);
  };

  const currentlySelected = categorySelection === categoryName ? { backgroundColor: 'rgb(211 224 255)' } : {};

  const formatedName = categoryName[0].toUpperCase() + categoryName.slice(1, categoryName.length);

  return (
    <React.Fragment>
      <p
        className={classes.categoryCard}
        onClick={handleSelection}
        style={currentlySelected}>
        {formatedName}
      </p>
    </React.Fragment>
  );
}

export default CategorySelector;