import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchBarComponent from 'material-ui-search-bar';
import MissingMessage from 'components/ui/MissingMessage/MissingMessage';
import googleImageCSE from 'api/google-cse';
import useStyles from './styles.js';

const ProductImageSearch = ({ handleImageChange, productBrand, productName }) => {
  const classes = useStyles();
  const [imageQuery, setImageQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (manualQuery = '') => {
    googleImageCSE(manualQuery || imageQuery, resultArr => {
      const images = resultArr.map(obj => ({
        image: obj['image']['thumbnailLink'],
        name: obj['title'],
      }));
      setSearchResults(images);
    });
  };

  const handleCancel = () => {
    setImageQuery('');
    setSearchResults([]);
  };

  const resultList = searchResults.map(item => {
    const itemImageURL = item['image'] || item['image_url'] || item['image_small_url'];

    return (
      <div
        key={itemImageURL}
        role='presentation'
        className={classes.thumbnailContainer}
        onClick={() => handleImageChange(itemImageURL)}
        onKeyDown={() => handleImageChange(itemImageURL)}
      >
        <img src={itemImageURL} alt={'product'} className={classes.itemThumbnail}></img>
      </div>
    );
  });

  useEffect(() => {
    if (productName) {
      const defaultQuery = `${productName} ${productBrand || ''}`;
      setImageQuery(defaultQuery);
      handleSearch(defaultQuery);
    }
  }, []);

  return (
    <div className={classes.imageGoogleSearch}>
      <SearchBarComponent
        className={classes.searchbar}
        value={imageQuery}
        onChange={value => setImageQuery(value)}
        onRequestSearch={handleSearch}
        onCancelSearch={handleCancel} />

      {imageQuery && (
        <div className={classes.searchResultCards}>
          {resultList.length > 0 ?
            <React.Fragment>{resultList}</React.Fragment>
            :
            <MissingMessage message='No image results' iconType='image' />
          }
        </div>
      )}
    </div>
  );
};

export default ProductImageSearch;

ProductImageSearch.propTypes = {
  handleImageChange: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
  productBrand: PropTypes.string.isRequired,
};
