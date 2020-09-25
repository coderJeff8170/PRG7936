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

  // renderDigits(value){
  //   //return (value.toString().split("").join("+"));
  // (value.toString().split("")).map(el=>(<div>{el}</div>));
  // }

  render() {
    const value = this.props.count;
    const digits = value.toString().split('').map((el, i)=>(<div key={i} style={{'display': 'inline'}}>{el}</div>))

    return (
      <div className="text-center">
        <h2 >Counter</h2>
        <div>
          <div className="col">
            <button onClick={this.increment}>+ 1</button>
            <button onClick={this.incrementFive}>+ 5</button>
          </div>
          <h1 >{digits}</h1>
          <div>
            <button onClick={this.decrement}>- 1</button>
            <button onClick={this.decrementTen}>- 10</button>
          </div>

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