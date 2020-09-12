import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = props => {
    return (
    <h1>I'm {props.dogname}, a poop goat!</h1>
    )
}

App.propTypes = {
    dogname: PropTypes.string.isRequired
}

App.defaultProps = {
    dogname: 'Nilla'
}

ReactDOM.render(<App dogname="Marley"/>, document.getElementById('root'));