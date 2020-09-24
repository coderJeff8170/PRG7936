import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: 'Increment'
    });
  };

  incrementFive = () => {
    this.props.dispatch({
      type: 'INCREMENT-FIVE'
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: 'Decrement'
    });
  };

  decrementTen = () => {
    this.props.dispatch({
      type: 'DECREMENT-TEN'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'Reset'
    });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div style={{width: '150px'}}>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>Increase By 1</button>
          <button onClick={this.incrementFive}>Increase By 5</button>
          <button onClick={this.decrement}>Decrease By 1</button>
          <button onClick={this.decrementTen}>Decrease By 10</button>
          <br />
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);