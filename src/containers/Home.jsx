import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Home = ({ counterValue, handleIncreaseValue, handleDecreaseValue }) => (
  <div>
    <h2>Home Page</h2>
    <p>The counter value is {counterValue}</p>
    <button onClick={handleIncreaseValue}>Add</button>
    <button onClick={handleDecreaseValue}>Remove</button>
  </div>
);

// reducer to props
const mapStateToProps = state => ({
  counterValue: state.counterReducer.counter
});

// dispatcher
const mapDispatchToProps = dispatch => ({
  handleIncreaseValue: () => {
    dispatch({ type: 'INCREMENT' });
  },
  handleDecreaseValue: () => {
    dispatch({ type: 'DECREMENT' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

