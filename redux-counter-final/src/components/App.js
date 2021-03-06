import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, onUpdateCount, onChangeCount } from '../actions/index';
import Updater from './Updater';

class App extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <h1 id="title">The Final Countdown/Up!</h1>
        <Counter {...this.props} />
        <Updater {...this.props} />
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