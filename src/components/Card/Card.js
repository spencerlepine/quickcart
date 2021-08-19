import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AddToCartButton from 'components/ui/AddToCartButton/AddToCartButton';
import Popup from 'components/ui/Popup/Popup';
import ProductDetails from 'components/ProductDetails/ProductDetails';
import useStyles from './styles.js';

const Card = ({ item, minimalFormat, canEdit }) => {
  const classes = useStyles();
  // const { fetchItem } = useProducts();

  useEffect(() => {
    if (item['loadProductFromID'] !== undefined) {
      // fetchItem(item['loadProductFromID']);
    }
  }, []);

  if (minimalFormat) {
    return (
      <div className={`card ${classes.card}`}>
        <Popup
          DefaultElem={(
            <div className={classes.minimalCard}>
              <p>{JSON.stringify(item)} minimal</p>
            </div>
          )}
          PopupElem={<ProductDetails canEdit={canEdit} />}
        />
      </div>
    );
  } else {
    return (
      <div className={`card ${classes.card}`}>
        <AddToCartButton isBubble={true} className={classes.addCartBtn} />

        <Popup
          DefaultElem={(
            <div className={classes.detailedCard}>
              <p>{JSON.stringify(item)} with plus sign</p>
            </div>
          )}
          PopupElem={<ProductDetails canEdit={canEdit} />}
        />
      </div>
    );
  }
};

export default Card;

Card.propTypes = {
  item: PropTypes.object.isRequired,
  minimalFormat: PropTypes.bool.isRequired,
  canEdit: PropTypes.bool.isRequired,
};

Card.defaultProps = {
  minimalFormat: false,
  canEdit: false,
};
