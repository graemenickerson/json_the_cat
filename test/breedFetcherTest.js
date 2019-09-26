// breeedFetcherTest.js
// Graeme Nickerson
// September 26, 2019

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('returns an error description when the breed does not exist' , (done) => {
    fetchBreedDescription('Siberfdsafian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(desc, null);

      const expectedErrorMessage = 'Invalid Breed Name!';

      // compare returned description
      assert.equal(expectedErrorMessage, err);

      done();
    });
  });
});
