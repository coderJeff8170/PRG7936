import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

/*
----------------------------- Requirements ------------------------
Step 1
Create two more buttons: one that will increment the number by 5 and one that will decrement the number by 10.[X]
You will need two more actions and case statements to handle this.[X]

Step 2
Make it clear on the page what each button is doing. It should look similar to the example below.[X]

Step 3
Style it!
 */

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'Increment':
      return {
        count: state.count + 1
      };
    case 'INCREMENT-FIVE':
      return {
        count: state.count + 5
      };
    case 'Decrement':
      return {
        count: state.count - 1
      };
    case 'DECREMENT-TEN':
      return {
        count: state.count - 10
      };
    case 'Reset':
      return {
        count: (state.count = 0)
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