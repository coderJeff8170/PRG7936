import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

  play = () => {
    this.player.currentTime = 0;
    this.player.volume = .2
    this.player.play();
  }


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

  componentDidUpdate(){
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
      switch(digArr.length){
        case 1:
          //add two zeros
          digArr=["0", "0", ...digArr];
          break;
        case 2:
          //add one zero
          digArr.unshift("0");
          break;
      }
      if(value>=0){
        //return result
        return digArr;
      }else{
        //readminister minus symbol
        // return result
        digArr.unshift("-");
        return digArr;
      }
    }
    // return a flip number for each digit
    const digits = handleDigits(value).map((el, i) => (<div key={i} className="digit" >{el}</div>));

    return (
      <div className="text-center">
        <h2>Jeff's Flip Number Counter</h2>
        <div>
          <div className="col">
            <button onClick={this.increment}>+ 1

            </button>
            <button onClick={this.incrementFive}>+ 5</button>
          </div>
          <h1 className="readout text-center">{digits}</h1>
          <audio ref={ref => this.player = ref} src="https://paintedbyjeff.com/FCC/MC-303samples/MC-303 Woodblock L.wav"></audio>
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