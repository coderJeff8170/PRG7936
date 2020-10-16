import React from 'react';

class Counter extends React.Component {

  playSound = () => {
    const audio = new Audio("https://paintedbyjeff.com/FCC/MC-303samples/MC-303 Mega Blip 1.wav");
    audio.volume = .1;
    audio.play();
  }

  componentDidUpdate(prevProps){
    //console.log(prevProps.count, this.props.count);
    if(prevProps.count !== this.props.count){
      this.playSound();
    }
  }

  render(){
    const { count, numClicks, onDecrement, onIncrement } = this.props;
    //limit counter to 999/-999 may not use this.
    // const value = count <= 999 && count >= (-999) ? count
    //   : count < (-999) ? (-999)
    //     : 999;

    const digits = count.toString().split('').map((el, i) => (<div key={i} className="digit" >{el}</div>));

    return (
            <div >
              <div>
                <button onClick={onDecrement}>-</button>
                <div className="d-flex justify-content-center">
            <h1 className="readout">{digits}</h1>
            
          </div>
                <button onClick={onIncrement}>+</button>
                <br />
                <p>Number of times increment/decrement button has been clicked: {numClicks}</p>
              </div>
            </div>
          );
  }
}


export default Counter;