import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {


  increment = () => {
    //fill in later
  }

  decrement = () => {
    //fill in later
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

// TODO: mapStateToProps function
function mapStateToProps(state){
  return { count: state.count};
}

//TODO: refactor export
//export default Counter;

export default connect(mapStateToProps)(Counter);