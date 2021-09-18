import axios from 'axios';

// https://github.com/jjmax75/google-image-search/blob/master/index.js
/**
 * Retrieves a list of image search results from Google
 * @param (String) searchTerm
 * @param (Function) callback (function to call once results are processed)
 * @param (Number) -optional- start (starting from what result)
 * @param (Number) -optional- num (how many results to return, 1 - 10)
 *
 * @return (Object)
 *
 */

function getImageSearchResults(searchTerm, callback, start, num) {
  start = start < 0 || start > 90 || typeof (start) === 'undefined' ? 0 : start;
  num = num < 1 || num > 10 || typeof (num) === 'undefined' ? 10 : num;

  if (!searchTerm) {
    console.error('No search term');
  }

  let parameters = `&q=${encodeURIComponent(searchTerm)}`;
  parameters += '&searchType=image';
  parameters += start ? `&start=${start}` : '';
  parameters += `&num=${num}`;

  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_CSE_API_KEY}&cx=${process.env.REACT_APP_CSE_ID}${parameters}`;

  axios.get(url)
    .then(result => {
      if (result.data && result.data.items) {
        callback(result.data.items);
      } else {
        callback([]);
      }
    });
}

export default getImageSearchResults;