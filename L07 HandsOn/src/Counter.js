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
    //limit counter to 999/-999
    const value = this.props.count <= 999 && this.props.count >= (-999) ? this.props.count
      : this.props.count < (-999) ? (-999)
        : 999;

    //isolate digits for display
    const digits = value.toString().split('').map((el, i) => (<div key={i} className="digit" >{el}</div>));

    //add zeros for three digit readout
    const makeZeros = (value) => {

      const zero = <div className="digit" >0</div>;

      if (value <= 9 && value >= 0) {
        return (
          (<span>{zero}{zero}</span>)
        );
      } else if ((value >= 10 && value <= 99)) {
        return zero;
      } else {
        return;
      }
    }

    const zeros = makeZeros(value);

    return (
      <div className="text-center">
        <h2>Jeff's Flip Number Counter</h2>
        <div>
          <div className="col">
            <button onClick={this.increment}>+ 1</button>
            <button onClick={this.incrementFive}>+ 5</button>
          </div>
          <h1 className="readout text-center">{zeros}{digits}</h1>
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