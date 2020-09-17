import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Header = props => 
        <div>Hello World</div>


// const App = props => {
//     return (
//     <h1>I'm {props.dogname}, a poop goat!</h1>
//     )
// }


ReactDOM.render(<Header />, document.getElementById('root'));