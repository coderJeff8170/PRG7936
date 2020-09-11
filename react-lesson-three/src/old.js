// import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

// const App = props => {
//     const user = {
//         name: "Sophia",
//         address: "3939 Woodgreen Terrace",
//         city: "Charlotte",
//         state: "North Carolina",
//         zip: 28205

//     };
//     return <User person={user} items="guitar, hoodie, leggings" amount={140}/>;
// };

// const User = props => (
//     <ul>
//         <li>Name: {props.person.name}</li>
//             <ul>
//                 <li>Address: {props.person.address}</li>
//                 <li>City: {props.person.city}</li>
//                 <li>State: {props.person.state}</li>
//                 <li>Zip: {props.person.zip}</li>
//             </ul>
//         <li>Items: {props.items}</li>
//         <li>Shipped: {String(props.shipped)}</li>
//         <li>Paid: {String(props.paid)}</li>
//         <li>Amount: {props.amount}</li>
//     </ul>
// );



// User.propTypes = {
//     person: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         address: PropTypes.string.isRequired,
//         city: PropTypes.string.isRequired,
//         state: PropTypes.string.isRequired,
//         zip: PropTypes.number.isRequired,
//     }),
//     items: PropTypes.string.isRequired,
//     paid: PropTypes.bool,
//     amount: PropTypes.number.isRequired,
//     shipped: PropTypes.bool
// }

// User.defaultProps = {
//     paid: false,
//     shipped: false
// }



// ReactDOM.render(
// <App/>,
// document.getElementById('root')
// );

//okay now make this work with the map function!
// const list = ['bread', 'milk', 'eggs', 'tea', 'liquor'];

// const listItems = [];

// for (let i=0; i<list.length; i++) {
//     listItems.push(<li key={i}>{list[i]}</li>);
// };

// const List = props => <ul>{props.items}</ul>;

// const App = props => {
//     return <List items={listItems}/>
// };


//okay now make this work with the map function!
// const List = props => {
//     const listItems = props.items.map((item, i) => <li key={i}>{item.name}: ${item.price.toFixed(2)}</li>);
//         return <ul>{listItems}</ul>
//     };
    
//     const App = props => {
//         //think of items as something passed into the state
//         const items = [
//             {name: 'bread', price: 2.00},
//             {name: 'milk', price: 2.50},
//             {name: 'eggs', price: 3.00},
//             {name: 'tea', price: 2.00},
//             {name: 'liquor', price: 10.00}
//         ];
//         return <List items={items}/>
//     };