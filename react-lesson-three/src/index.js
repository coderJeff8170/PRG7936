import React from 'react';
import ReactDOM from 'react-dom';


//okay now make this work with the map function!
const List = props => {
    const listItems = props.items.map((item, i) => <li key={i}>{item}</li>);
    return <ul>{listItems}</ul>
};

const App = props => {
    //think of items as something passed into the state
    const items = ['bread', 'milk', 'eggs', 'tea', 'liquor'];
    return <List items={items}/>
};

ReactDOM.render(
<App />,
document.getElementById('root')
);
