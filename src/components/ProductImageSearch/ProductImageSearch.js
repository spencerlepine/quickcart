import React from 'react';
import FileBase from 'react-file-base64';
import CropInputImage from './CropInputImage';
import DetailsPopup from '../DetailsPopup/DetailsPopup';
import ImageSearch from '../ImageSearch/ImageSearch';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import useStyles from './styles.js';

const ProductImageSearch = ({ updateImageState, currentImage, thisGrocery }) => {
  const classes = useStyles();
  const defaultSearch = thisGrocery["name"] + ' ' + thisGrocery["brand"];

  const handleImageInput = async (base64) => {
    const croppedImage = await CropInputImage(base64);

    // save the new image to the state
    updateImageState(croppedImage);
  };

  return (
    <div className={classes.imageContainer}>
      {currentImage ? (
        <React.Fragment>
          <img src={currentImage} alt='product'></img>
          <button className={classes.removeImageBtn}
            onClick={() => updateImageState('')}
          >
            X
          </button>
        </React.Fragment>
      ) : (
        <div>
          <div className={classes.fileInput}>
            <div>
              <FileBase
                type='file'
                multiple={false}
                onDone={({ base64 }) => {
                  handleImageInput(base64);
                }}
              />
            </div>
          </div>
          <DetailsPopup
            CardComponent={<ImageSearchIcon className={classes.searchPopup}></ImageSearchIcon>}
            DetailsComponent={<ImageSearch defaultSearch={defaultSearch} updateImageState={updateImageState} />}
          />
        </div>
      )}

    </div>
  );
};

export default ProductImageSearch;