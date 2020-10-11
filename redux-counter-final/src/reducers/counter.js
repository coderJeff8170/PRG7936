const initialState = {
  count: 0,
  numClicks: 0,
  changeCount: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        numClicks: state.numClicks + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        numClicks: state.numClicks + 1
      };
    case 'CHANGE_COUNT':
    return {
      ...state,
      changeCount: parseInt(action.num)
    };
    case 'UPDATE_COUNT':
    return {
      ...state,
      count: state.changeCount,
      numClicks: 0
    };
    default:
      return state;
  }
}

export default counterReducer;