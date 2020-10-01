export const SET_TESTED = 'SET_TESTED';

export const setTested = (testedDrinks) => {
  return {
    type: SET_TESTED,
    payload: testedDrinks,
  };
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_TESTED: {
      return { ...state, tested: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
