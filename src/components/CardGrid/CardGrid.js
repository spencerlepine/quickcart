import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card/Card';
import useStyles from './styles.js';

const CardGrid = ({ list, singleRow, minimalFormat }) => {
  const classes = useStyles();

  const overrideStyles = singleRow ? { display: 'flex' } : {};

  return (
    <div className={`cardGrid ${classes.cardGrid}`} style={overrideStyles}>
      {list.map((item, i) => (
        <Card {...item} key={i} minimalFormat={minimalFormat} />
      ))}
    </div>
  );
};

export default CardGrid;

CardGrid.propTypes = {
  list: PropTypes.array.isRequired,
  singleRow: PropTypes.bool.isRequired,
  minimalFormat: PropTypes.bool.isRequired,
};

CardGrid.defaultProps = {
  singleRow: false,
  minimalFormat: false,
};