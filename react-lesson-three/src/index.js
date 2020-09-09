import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = props => {
    const user = {
        name: "Sophia",
        address: "3939 Woodgreen Terrace",
        city: "Charlotte",
        state: "North Carolina",
        zip: 28205

    };
    return <User person={user} items="guitar, hoodie, leggings" amount={140}/>;
};

const User = props => (
    <ul>
        <li>Name: {props.person.name}</li>
            <ul>
                <li>Address: {props.person.address}</li>
                <li>City: {props.person.city}</li>
                <li>State: {props.person.state}</li>
                <li>Zip: {props.person.zip}</li>
            </ul>
        <li>Items: {props.items}</li>
        <li>Shipped: {String(props.shipped)}</li>
        <li>Paid: {String(props.paid)}</li>
        <li>Amount: {props.amount}</li>
    </ul>
);



User.propTypes = {
    person: PropTypes.shape({
        name: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        zip: PropTypes.number.isRequired,
    }),
    items: PropTypes.string.isRequired,
    paid: PropTypes.bool,
    amount: PropTypes.number.isRequired,
    shipped: PropTypes.bool
}

User.defaultProps = {
    paid: false,
    shipped: false
}



ReactDOM.render(
<App/>,
document.getElementById('root')
);
