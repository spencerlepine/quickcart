import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card/Card';
import useStyles from './styles.js';

const CardGrid = ({ list, singleRow, minimalFormat, isSavedProducts, handleViewMore }) => {
  const classes = useStyles();

  const overrideStyles = singleRow ? { flexWrap: 'nowrap' } : {};

  return (
    <div className={`cardGrid ${classes.cardGrid}`} style={overrideStyles}>
      {list.map((item, i) => (
        <Card {...item} key={i} minimalFormat={minimalFormat} isSavedProducts={isSavedProducts} />
      ))}
      <button onClick={handleViewMore}>View More</button>
    </div>
  );
};

export default CardGrid;

CardGrid.propTypes = {
  list: PropTypes.array.isRequired,
  singleRow: PropTypes.bool.isRequired,
  isSavedProducts: PropTypes.bool.isRequired,
  minimalFormat: PropTypes.bool.isRequired,
  handleViewMore: PropTypes.func.isRequired,
};

CardGrid.defaultProps = {
  singleRow: false,
  minimalFormat: false,
  isSavedProducts: false,
};