import React from 'react';
import ReactDOM from 'react-dom';


class MyComponent extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            myState: 'Hello World!'
        }

        this.myMethod = this.myMethod.bind(this);
    }

    myMethod(){
        
        this.setState({
            myState: 'Hello Jeff!'
        });
    }

    render(){
        return(
            <div>
                <h1>{this.state.myState}</h1>
                <button onClick={this.myMethod}>Click Me</button>
            </div>
        );
    }
}




ReactDOM.render(<MyComponent />, document.getElementById('root'));