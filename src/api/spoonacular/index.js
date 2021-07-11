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
          alert('could not find product')
          return false
        } else {
          return result.data
        }
      } else return null
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
    const searchLimit = 1;
    const searchUrl = baseOFFURL + `/food/products/search?query=${searchString}&number=${searchLimit}&apiKey=${apiKey}`;

    const result = await axios({
      method: 'get',
      url: searchUrl,
    }).then(async (result) => {
      if (result) {
        const idToFetch = result.data.products[0]['_id'];
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
        const idToFetch = result.data['_id'];
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
        const idToFetch = result.data['_id'];
        const details = await fetchProductDetails(idToFetch);
        return details;
      } else return null;
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}