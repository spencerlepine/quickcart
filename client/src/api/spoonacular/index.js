import axios from 'axios';

// OpenFoodFacts REST endpoint
const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
const baseURL = 'https://api.spoonacular.com';

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
    });
};

/*
export const searchProducts = async (searchString) => {
  try {
    const searchLimit = 10;
    const searchUrl = baseURL + `/food/products/search?query=${searchString}&number=${searchLimit}&apiKey=${apiKey}`;

    const result = await axios({
      method: 'get',
      url: searchUrl,
    }).then(result => {
      if (result) {
        return result.data.products
      } else return null
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export const searchProductByName = async (searchString) => {
  try {
    const spaceRe = / /ig;
    const dashRe = /'/ig;
    const searchLimit = 10;
    const searchUrl = baseURL + `/food/products/search?query=${searchString.toLowerCase()}&number=${searchLimit}&apiKey=${apiKey}`;
    const formatUrl = searchUrl.replace(spaceRe, '-').replace(dashRe, '');

    const result = await axios({
      method: 'get',
      url: formatUrl,
    }).then(async (result) => {
      if (result) {
        const idToFetch = result.data.products.length > 0 ? result.data.products[0]['id'] : 0;
        const details = await fetchProductDetails(idToFetch);
        return details;
      } else return null;
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export const searchProductById = async (id) => {
  const formattedId = Math.abs(parseInt(id)).toString();

  try {
    const searchUrl = baseURL + `/food/products/${formattedId}?apiKey=${apiKey}`

    const result = await axios({
      method: 'get',
      url: searchUrl,
    }).then(async (result) => {
      if (result) {
        const idToFetch = result.data['id'];
        const details = await fetchProductDetails(idToFetch);
        return details;
      } else return null;
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
*/

