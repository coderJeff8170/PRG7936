import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/photos';
import App from './components/App';


/*
Requirements
For this project, you will using an API available with some fake data. Use the below API to list out the first 50 pictures in this data set onto your webpage.

API = 'https://jsonplaceholder.typicode.com/photos'

Step 1
Be sure to include the following:

A component
The state
A componentDidMount() method
Anything else that helps render the information on the page
SAR - Store, Action, Reducer!
*/
const store = createStore(reducer);




render(
    <Provider>
        <App />
    </Provider>,
     document.getElementById('root'));