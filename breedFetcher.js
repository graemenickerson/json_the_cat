// breedFetcher.js
// Graeme Nickerson
// September 26, 2019

const request = require('request');



const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (body) {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback('Invalid Breed Name!', null);
      }
    } else {
      callback(error);
    }
  
  });
};

module.exports = { fetchBreedDescription };