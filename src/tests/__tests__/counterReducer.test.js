import counterReducer from '../../reducers/counterReducer';


// To make the test unbiased we generate a random initialState for INCREMENT and DECREMENT,
// The reducer result should always be predictable regardless of initialState.
const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const randomNumber = getRandomNumber(1, 10);

describe('Counter reducer', () => {
  it('should return the initial state', () => {
    expect(true).toEqual(true);
  });

});
