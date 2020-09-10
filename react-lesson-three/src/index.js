import React from 'react';
import ReactDOM from 'react-dom';


//okay now make this work with the map function!
const list = ['bread', 'milk', 'eggs', 'tea', 'liquor'];

const listItems = [];

for (let i=0; i<list.length; i++) {
    listItems.push(<li key={i}>{list[i]}</li>);
};

const List = props => <ul>{props.items}</ul>;

const App = props => {
    return <List items={listItems}/>
};

ReactDOM.render(
<App />,
document.getElementById('root')
);
