

/**
 * Manages the counter value
 * by chosing which action should be used
 * when the user clicks one of the 2 available buttons.
 * the functions are under /actions
 * @param {number} state times clicked
 * @param {string} action used to identify which action to execute
 * @return {number} updated state
 */
export default function counterReducer(state = { counter: 0 }, action) {
  console.log(state);
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    case 'DECREMENT':
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}
