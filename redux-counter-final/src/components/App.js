import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, onUpdateCount, onChangeCount } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter 
          count={this.props.count}
          changeCount={this.props.changeCount}
          numClicks={this.props.numClicks} 
          onIncrement={this.props.onIncrement} 
          onDecrement={this.props.onDecrement}
          onUpdateCount={this.props.onUpdateCount}
          onChangeCount={this.props.onChangeCount}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onUpdateCount: () => dispatch(onUpdateCount()),
    onChangeCount: (num) => dispatch(onChangeCount(num))
  };
}

function mapStateToProps(state) {
    return {
      count: state.count,
      numClicks: state.numClicks,
      changeCount: state.changeCount
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);