import axios from 'axios';
import { formatProductForQuickcart } from 'config/schema/quickcartProductFormat';

// OpenFoodFacts REST endpoint
const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
const baseURL = 'https://api.spoonacular.com';
// THESE are different routes
// /food/products/upc/:productUPC
// /food/products/:productId

export const fetchUPCItem = (upc, callback) => {
  const searchUrl = `${baseURL}/food/products/upc/${upc}?apiKey=${apiKey}`;
  axios.get(searchUrl)
    .then(result => {
      if (result.data) {
        if (result.data.status === 'failure') {
          callback('Spoonacular request failed');
        } else {
          callback(null, result.data);
        }
      }
    })
    .catch(err => {
      callback(err);
    });
};

export const fetchProductDetails = (productId, successCb) => {
  const searchUrl = `${baseURL}/food/products/upc/${productId}?apiKey=${apiKey}`;

  axios.get(searchUrl)
    .then(result => {
      if (result) {
        console.log(result.data['nutrition']);
        successCb(result.data['nutrition']);
      } else {
        return null;
      };
    })
    .catch(err => {
      console.error(err);
    });
};

export const searchProductsByName = (searchString, callback) => {
  const searchLimit = 5;
  const searchUrl = `${baseURL}/food/products/search?query=${searchString}&number=${searchLimit}&apiKey=${apiKey}`;

  axios.get(searchUrl)
    .then(result => (
      Promise.all(result.data.products.map(product => (
        axios.get(`${baseURL}/food/products/${product['id']}?apiKey=${apiKey}`)
      )))
    ))
    .then(detailedProducts => {
      if (detailedProducts) {
        callback(detailedProducts.map(p => formatProductForQuickcart(p.data)));
      }
    })
    .catch(err => {
      console.error(err);
    });
};
