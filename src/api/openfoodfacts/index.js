import axios from 'axios';

// OpenFoodFacts REST endpoint
const baseOFFURL = 'https://us.openfoodfacts.org';

export const fetchUPCItem = async (UPC) => {
  try {
    const result = await axios({
      method: 'get',
      url: baseOFFURL + '/api/v0/product/' + UPC,
    }).then(result => {
      if (result.data) {
        return result.data.product;
      } else return null;
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export const searchProducts = async (searchString) => {
  try {
    const formatted = formatSearchString(searchString);
    const result = await axios({
      method: 'get',
      url: baseOFFURL + '/cgi/search.pl?' + formatted,
    }).then(result => {
      if (result) {
        return result.data.products;
      } else return null;
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export const searchProductByName = async (searchString) => {
  try {
    const formatted = formatSearchString(searchString)
    const result = await axios({
      method: 'get',
      url: baseOFFURL + '/cgi/search.pl?' + formatted,
    }).then(result => {
      if (result) {
        return result.data.products[0];
      } else { return null; }
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

export const searchProductById = async (id) => {
  const formattedId = Math.abs(parseInt(id)).toString();
  try {
    const result = await axios({
      method: 'get',
      url: baseOFFURL + '/api/v0/product/' + formattedId + '.json',
    }).then(result => {
      if (result.data) {
        return result.data.product;
      } else return null;
    });
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

function formatSearchString(string) {
  const keywords = string.split(' ');
  const splitWords = keywords.join('%20');

  let urlString = '';
  urlString += 'search_terms='
    + splitWords
    + '&search_simple=1&action=process&json=1';

  //action_process '&tagtype_0=categories&tag_contains_0=contains&tag_0='
  return urlString;
}