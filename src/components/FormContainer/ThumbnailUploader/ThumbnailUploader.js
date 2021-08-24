import React from 'react';
import PropTypes from 'prop-types';
import FileBase from 'react-file-base64';
import useStyles from './styles.js';

const ThumbnailUploader = ({ handleImageChange, currentImage }) => {
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
        </div>
      }
      {/* <DetailsPopup
        CardComponent={<ImageSearchIcon className={classes.searchPopup}></ImageSearchIcon>}
        DetailsComponent={<ImageSearch defaultSearch={defaultSearch} updateImageState={updateImageState} />}
      /> */}
    </div>
  );
};

export default ThumbnailUploader;

ThumbnailUploader.propTypes = {
  handleImageChange: PropTypes.func.isRequired,
  currentImage: PropTypes.string.isRequired,
};
