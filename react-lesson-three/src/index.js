import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const GroceryList = props => {
    return (
        <ul>
            <li>{props.item1}</li>
            <li>{props.item2}</li>
            <li>{props.item3}</li>
        </ul>
    );
}



const List = props => {
    const listItems = props.items.map((el, i) => <li key={i}>{el.name}: ${el.price}</li>);
    return (
        <ul>{listItems}</ul>
    );
}

const Employee = props => {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.age}</li>
            <li>{props.position}</li>
        </ul>
    );
}

Employee.PropTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    position: PropTypes.string
}

Employee.defaultProps = {
    position: 'employee'
}

const App = props => {
    const items = [
        {name: 'bread', price: 2.00},
        {name: 'milk', price: 2.50},
        {name: 'eggs', price: 3.00},
        {name: 'tea', price: 2.00},
        {name: 'liquor', price: 10.00}
    ];
    return(
        <div>
            <Employee name="Sophia" age={14} />
            <GroceryList item1="guitar pic" item2="Stratocaster" item3="drumsticks"/>
            <List items={items} />
        </div>
        
    )
}


ReactDOM.render(
<App />,
document.getElementById('root')
);
