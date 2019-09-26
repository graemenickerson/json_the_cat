// index.js
// Graeme Nickerson
// September 26, 2019

const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2);


fetchBreedDescription(args, (error, description) => {
  if (error) {
    console.log('Error Fetch Details: ', error);
  } else {
    console.log(description);
  }
});