import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// List component to render an unordered list populated by an array passed into props
const List = props => {
    if(!Array.isArray(props.cars)){
        return (
            <div>
                <p>Sorry, I can't map {props.cars}, because it's not in an array</p>
                <p>Please make you've supplied an array of cars!</p>
            </div>
        );
    }else{
        const cars = props.cars.map((car, i) => <li key={i}>{car}</li>);
        return (
            <ul>{cars}</ul>
        );
    }
}

List.propTypes = {
    cars: PropTypes.array.isRequired
}

// App component to return const favoriteCars... through a list component
const App = props => {
    const favoriteCars = [
        'Honda CR-V ',
        'Toyota Highlander',
        'Ford F-150',
        'BMW X3',
        'Subaru Crosstrek'
    ];
    return (
    <List cars={favoriteCars} />
    );
}

//render App component to DOM
ReactDOM.render(<App />, document.getElementById('root'));