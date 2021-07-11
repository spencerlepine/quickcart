import React from 'react';
import getPriceColor from '../../../modules/getPriceColor';
import getPriceRank from '../../../modules/getPriceRank';

const PriceIndicator = ({ priceInt }) => {
  const priceStyles = {
    color: getPriceColor(priceInt),
    fontSize: '1.2em',
    fontWeight: '400',
  }

  return (
    <div style={priceStyles}>
      <p style={{ margin: '4px', padding: '4px' }}>{getPriceRank(priceInt)}</p>
    </div>
  );
}

export default PriceIndicator;