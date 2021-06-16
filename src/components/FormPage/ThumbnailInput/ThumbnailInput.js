import React from "react";
import FileBase from "react-file-base64";
import CropInputImage from "./CropInputImage";
import DetailsPopup from "../../DetailsPopup/DetailsPopup"
import ImageSearch from "../../ImageSearch/ImageSearch"
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import useStyles from "./styles.js";

const ThumbnailInput = ({ handleChange, currentImage, setCurrentImageSelection }) => {
  const classes = useStyles();

  const handleImageInput = async (base64) => {
    const croppedImage = await CropInputImage(base64);

    // save the new image to the state
    handleChange({ target: { name: "image", value: croppedImage } });
    // save the selected image to context
    setCurrentImageSelection(croppedImage)
  };

  return (
    <div className={classes.imageContainer}>
      {currentImage ? (
        <>
          <img src={currentImage} alt='product'></img>
          <button className={classes.removeImageBtn}
            onClick={() => setCurrentImageSelection("")}
          >
            X
          </button>
        </>
      ) : (
        <div>
          <div className={classes.fileInput}>
            <div>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => {
                  handleImageInput(base64);
                }}
              />
            </div>
          </div>
          <DetailsPopup
            CardComponent={<ImageSearchIcon className={classes.searchPopup}></ImageSearchIcon>}
            DetailsComponent={<ImageSearch />}
          />
        </div>
      )}

    </div>

  );
};

export default ThumbnailInput
