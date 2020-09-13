import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//1. create a stateful component named BankAccount, whereby a button increments the balance
//which is dependent on the state's 'balance' property

//2. now provide an input whereby the button increments the account balance by the specific
// value entered by the user...

class BankAccount extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            accountBalance: 2222.22,
            incrementAmount: 0
        }
    }
    // got to figure out how to limit the added amount to no more than 2 decl places
    increment(){
        
        this.setState({
            accountBalance: (this.state.accountBalance + this.state.incrementAmount)
        });
    }

    render(){
        return(
            <div>
                <h3>Account Balance: ${this.state.accountBalance}</h3>
                <input type="number"
                step="0.01"
                onChange={event=>this.setState({incrementAmount: parseFloat(event.target.value)})}
                value={this.state.incrementAmount}
                />
                <button onClick={this.increment.bind(this)}>Make me rich!</button>
            </div>
        );
    }
}




ReactDOM.render(<BankAccount />, document.getElementById('root'));