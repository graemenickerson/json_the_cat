// breedFetcher.js
// Graeme Nickerson
// September 26, 2019

const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  if (body) {
    const data = JSON.parse(body);
    if (data.length > 0) {
      console.log(data[0].description);
    } else {
      console.error('Invalid Breed Name!');
    }
  } else {
    console.error(error);
  }
  
});