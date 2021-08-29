import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card/Card';
import useStyles from './styles.js';

const CardGrid = ({ list, singleRow, minimalFormat, isSavedProducts, handleViewMore, searchFilter }) => {
  const classes = useStyles();

  const overrideStyles = singleRow ? { flexWrap: 'nowrap' } : {};

  return (
    <div className={`cardGrid ${classes.cardGrid}`} style={overrideStyles}>
      {list.map(item => (
        <Card {...item} key={item['_id']} minimalFormat={minimalFormat} isSavedProducts={isSavedProducts} searchFilter={searchFilter} />
      ))}
      {handleViewMore && <button onClick={handleViewMore}>View More</button>}
    </div>
  );
};

export default CardGrid;

CardGrid.propTypes = {
  list: PropTypes.array.isRequired,
  searchFilter: PropTypes.string,
  singleRow: PropTypes.bool.isRequired,
  isSavedProducts: PropTypes.bool.isRequired,
  minimalFormat: PropTypes.bool.isRequired,
  handleViewMore: PropTypes.func,
};

CardGrid.defaultProps = {
  singleRow: false,
  minimalFormat: false,
  isSavedProducts: false,
  searchFilter: '',
};