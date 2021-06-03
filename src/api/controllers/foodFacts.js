import axios from "axios"

// OpenFoodFacts REST endpoint
const baseOFFURL = "https://us.openfoodfacts.org"

export const fetchUPCItem = async (UPC) => {
    try {
      const result = await axios({
        method: 'get',
        url: baseOFFURL + "/api/v0/product/" + UPC,
      }).then(result => {
        if (result.data) {
          return result.data.product
        } else return null
      });
      return result
    } catch (error) {
      console.log(error.message)
    }
}

export const searchProducts = async (searchString) => {
  try {
    const formatted = formatSearchString(searchString)
    const result = await axios({
      method: 'get',
      url: baseOFFURL + "/cgi/search.pl?" + formatted,
    }).then(result => {
      if (result) {
        return result.data.products
      } else return null
    });
    return result
  } catch (error) {
    console.log(error.message)
  }
}

function formatSearchString(string) {
  let urlString = "action=process"
  urlString += "&tagtype_0=categories&tag_contains_0=contains&tag_0="
    + string.replace(/[ ]/gi, "_")
    + "&json=true"
  return urlString
}

