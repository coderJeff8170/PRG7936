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
            accountBalance: 2222.22,
            addAmount: 0
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.state.addAmount !== nextState.addAmount){
            return true;
        }
        if(this.state.accountBalance !== nextState.accountBalance){
            return true;
        }else{
            return false;
        }

    }

    componentWillMount(){
        console.log('deprecated, but mounted!');
    }

    componentDidMount(){
        console.log('component did mount!');
    }

    componentDidUpdate(){
        console.log('component did update!');
    }
    //make this asynchronous!
    // done, but don't quite understand, and what is the props for??
    increment(){
        this.setState((prevState, props) =>
            ({ accountBalance: prevState.accountBalance + parseInt(prevState.addAmount) })
        );
    }

    render(){
        console.log('rendered!');
        return(
            <div>
                <h3>Account Balance: ${this.state.accountBalance}</h3>
                <input 
                    type="number"
                    onChange={event=>this.setState({addAmount: event.target.value})}
                    value={this.state.addAmount}
                >
                </input>
                <button onClick={this.increment.bind(this)}>
                    Add Amount
                </button>
            </div>
        );
    }

}


ReactDOM.render(<App />, document.getElementById('root'));