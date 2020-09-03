import React from 'react';
import ReactDOM, { render } from 'react-dom';

const item1 = 'apples';
const item1Price = '$1.00 per lb';
const item2 = 'oranges';
const item2Price = '$.70 per lb';
const item3 = 'mangos';
const item3Price = '$2.00 per lb';

const groceryList = (item1, item1Price, item2, item2Price, item3, item3Price) => {
return (
    <ul>
    <li>{item1}</li>
    <ul>
        <li>{item1Price}</li>
    </ul>
    <li>{item2}</li>
    <ul>
        <li>{item2Price}</li>
    </ul>
    <li>{item3}</li>
    <ul>
        <li>{item3Price}</li>
    </ul>
</ul>
)};

ReactDOM.render(
groceryList(item1, item1Price, item2, item2Price, item3, item3Price),
document.getElementById('root')
);