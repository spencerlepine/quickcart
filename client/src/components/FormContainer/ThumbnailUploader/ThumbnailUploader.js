import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'components/ui/Popup/Popup';
import { Link } from 'react-router-dom';
import { UPC_SCAN } from 'config/constants/routeConstants';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import FileBase from 'react-file-base64';
import ProductImageSearch from './ProductImageSearch/ProductImageSearch';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import useStyles from './styles.js';

const ThumbnailUploader = ({ handleImageChange, currentImage, productBrand, productName }) => {
  const classes = useStyles();

  return (
    <div className={`image-uploader ${classes.imageUploader}`}>
      {currentImage ?
        <React.Fragment>
          <img src={currentImage} alt='Product Thumbnail'></img>

          <button
            className={classes.removeImageBtn}
            onClick={() => handleImageChange('')}
          >
            X
          </button>
        </React.Fragment>
        :
        <div className={classes.productThumbnailInput}>
          <div className={classes.imageInputContainer}>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) => {
                handleImageChange(base64);
              }}
            />
          </div>
          <Popup
            DefaultElem={(
              <ImageSearchIcon className={classes.searchPopup}></ImageSearchIcon>
            )}
            PopupElem={(
              <ProductImageSearch handleImageChange={handleImageChange} productBrand={productBrand} productName={productName} />
            )}
          />
          <Link className={`${classes.promptBtn} ${classes.scanUPCBtn}`} to={UPC_SCAN}>
            <PhotoCameraIcon fontSize='large' />
          </Link>
        </div>}
    </div >
  );
};

export default ThumbnailUploader;

ThumbnailUploader.propTypes = {
  handleImageChange: PropTypes.func.isRequired,
  currentImage: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productBrand: PropTypes.string.isRequired,
};
