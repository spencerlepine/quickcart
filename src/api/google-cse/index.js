const https = require('https');

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

  const options = {
    host: 'www.googleapis.com',
    path: `/customsearch/v1?key=${process.env.REACT_APP_CSE_API_KEY}&cx=${process.env.REACT_APP_CSE_ID}${parameters}`,
  };

  let result = '';

  https.get(options, response => {
    response.setEncoding('utf8');

    response.on('data', data => {
      result += data;
    });

    response.on('end', () => {
      const data = JSON.parse(result);
      const resultsArray = [];
      // check for usage limits (contributed by @ryanmete)
      // This handles the exception thrown when a user's Google CSE quota has been exceeded for the day.
      // Google CSE returns a JSON object with a field called "error" if quota is exceed.
      if (data.error && data.error.errors) {
        resultsArray.push(data.error.errors[0]);
        // returns the JSON formatted error message in the callback
        callback(resultsArray);
      } else if (data.items) {
        // search returned results
        data.items.forEach(item => {
          resultsArray.push(item);
        });
        callback(resultsArray);
      } else {
        callback([]);
      }
    });
  });
}

module.exports = getImageSearchResults;