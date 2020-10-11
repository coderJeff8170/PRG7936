import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  //add a flip sound
  play = () => {
    this.player.currentTime = 0;
    this.player.volume = .2
    this.player.play();
  }
  /* ---------------- actions begin here ------------------  */
  increment = () => {

    this.props.dispatch({
      type: 'INCREMENT'
    });
  };

  incrementFive = () => {
    this.props.dispatch({
      type: 'INCREMENT-FIVE'
    });
  };

  decrement = () => {
    this.props.dispatch({
      type: 'DECREMENT'
    });
  };

  decrementTen = () => {
    this.props.dispatch({
      type: 'DECREMENT-TEN'
    });
  };

  reset = () => {
    this.props.dispatch({
      type: 'RESET'
    });
  };

  /* ---------------- actions end here ------------------  */

  //if component updates(numbers change), play flip sound
  componentDidUpdate() {
    this.play();
  }

  render() {
    //limit counter to 999/-999
    const value = this.props.count <= 999 && this.props.count >= (-999) ? this.props.count
      : this.props.count < (-999) ? (-999)
        : 999;
    // handle digits
    const handleDigits = (value) => {
      //make array from absolute value
      let digArr = Math.abs(value).toString().split('');
      //determine zeros
      switch (digArr.length) {
        case 1:
          //add two zeros
          digArr = ["0", "0", ...digArr];
          break;
        case 2:
          //add one zero
          digArr.unshift("0");
          break;
      }
      if (value >= 0) {
        //if possie value, return result
        return digArr;
      } else {
        //if not, readminister minus symbol and return result
        digArr.unshift("-");
        return digArr;
      }
    }
    // return a flip number for each digit
    const digits = handleDigits(value).map((el, i) => (<div key={i} className="digit" >{el}</div>));

    return (
      <div className="container text-center">
        <h2>Jeff's Flip Number Counter</h2>
        <div>
          <div>
            <button className="countButton" onClick={this.increment}>+ 1</button>
            <button className="countButton" onClick={this.incrementFive}>+ 5</button>
          </div>
          <div className="d-flex justify-content-center">
            <h1 className="readout">{digits}</h1>
            <audio ref={ref => this.player = ref} src="https://paintedbyjeff.com/FCC/MC-303samples/MC-303 Woodblock L.wav"></audio>
          </div>

          <div>
            <button className="countButton" onClick={this.decrement}>- 1</button>
            <button className="countButton" onClick={this.decrementTen}>- 10</button>
          </div>

          <br />
          <button className="resetButton" onClick={this.reset}>Reset</button>
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