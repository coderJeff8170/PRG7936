import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


// make a stateful component called Text that returns an input that alters the state of the component on change and renders the change
class Text extends React.Component {
    constructor(){
        super();

        this.state={
            text: 'Jeff is Superb!'
        }
    }

    update(event){
        this.setState({
            text: event.target.value
        });
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)}></input>
        <h1>{this.state.text}</h1>
            </div>
        );
    }
}


ReactDOM.render(<Text />, document.getElementById('root'));