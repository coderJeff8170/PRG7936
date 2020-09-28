import React from 'react';
import ReactDOM from 'react-dom';


const App = props => {
    return (
    <BankAccount />
    )
}

class BankAccount extends React.Component {
    constructor (props){
        super(props);

        this.state = {
            bankAccount: 2222.22,
            addAmount: 0
        }
    }

}


ReactDOM.render(<App />, document.getElementById('root'));