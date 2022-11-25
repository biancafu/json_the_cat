const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  const api = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(api, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(null, "Cannot find breed");
      return;
    }

    callback(null, data[0].description);
  });
};


module.exports = {fetchBreedDescription};