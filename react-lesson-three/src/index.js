import React from 'react';
import ReactDOM from 'react-dom';


//okay now make this work with the map function!
const List = props => {
const listItems = props.items.map((item, i) => <li key={i}>{item.name}: ${item.price.toFixed(2)}</li>);
    return <ul>{listItems}</ul>
};

const App = props => {
    //think of items as something passed into the state
    const items = [
        {name: 'bread', price: 2.00},
        {name: 'milk', price: 2.50},
        {name: 'eggs', price: 3.00},
        {name: 'tea', price: 2.00},
        {name: 'liquor', price: 10.00}
    ];
    return <List items={items}/>
};

ReactDOM.render(
<App />,
document.getElementById('root')
);
