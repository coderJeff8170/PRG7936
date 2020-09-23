import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 0
}

//add action functionality to reducer
const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById('root'));