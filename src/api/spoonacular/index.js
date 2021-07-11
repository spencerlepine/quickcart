import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

// OpenFoodFacts REST endpoint
const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;
const baseOFFURL = 'https://api.spoonacular.com';

export const fetchUPCItem = async (upc) => {
  try {
    const searchUrl = baseOFFURL + `/food/products/upc/${upc}?apiKey=${apiKey}`;
    const result = await axios({
      method: 'get',
      url: searchUrl,
    }).then(result => {
      if (result.data) {
        if (result.data.status === 'failure') {
          return false;
        } else {
          return result.data;
        }
      } else return null;
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export const searchProducts = async (searchString) => {
  try {
    const searchLimit = 10;
    const searchUrl = baseOFFURL + `/food/products/search?query=${searchString}&number=${searchLimit}&apiKey=${apiKey}`;

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

export const fetchProductDetails = async (id) => {
  try {
    const searchUrl = baseOFFURL + `/food/products/${id}?apiKey=${apiKey}`;

    const result = await axios({
      method: 'get',
      url: searchUrl,
    }).then(result => {
      if (result) {
        return result.data;
      } else return null;
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
    const searchUrl = baseOFFURL + `/food/products/search?query=${searchString.toLowerCase()}&number=${searchLimit}&apiKey=${apiKey}`;
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
    const searchUrl = baseOFFURL + `/food/products/${formattedId}?apiKey=${apiKey}`

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

export const searchProductByUpc = async (upc) => {
  try {
    const searchUrl = baseOFFURL + `/food/products/upc/${upc}?apiKey=${apiKey}`;

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