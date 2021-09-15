import axios from 'axios';
import { formatProductForQuickcart } from 'config/schema/quickcartProductFormat';

// OpenFoodFacts REST endpoint
const baseOFFURL = 'https://us.openfoodfacts.org';

export const fetchUPCItem = (UPC, callback) => {
  axios.get(`${baseOFFURL}/api/v0/product/${UPC}`)
    .then(result => {
      if (result.data) {
        callback(null, formatProductForQuickcart(result.data.product));
      } else {
        callback('Could not find product on OpenFoodFacts');
      }
    })
    .catch(err => {
      callback(err);
    });
};
