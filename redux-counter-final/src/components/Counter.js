import React from 'react';

class Counter extends React.Component {

  playSound = () => {
    const audio = new Audio("https://paintedbyjeff.com/FCC/MC-303samples/MC-303 Mega Blip 1.wav");
    audio.volume = .1;
    audio.play();
  }

  componentDidUpdate(prevProps) {
    //console.log(prevProps.count, this.props.count);
    if (prevProps.count !== this.props.count) {
      this.playSound();
    }
  }

  render() {
    const { count, numClicks, onDecrement, onIncrement } = this.props;
    const digits = count.toString().split('').map((el, i) => (<div key={i} className="digit" >{el}</div>));

    return (
      <div >
        <div id="controlPanel">

            <h1 className="readout">{digits}</h1>
            <div id="crementButtons">
            <button className="baseButton crementButton" onClick={onIncrement}>+</button>
          <button className="baseButton crementButton" onClick={onDecrement}>-</button>

          </div>
          
        </div>
        <h4>Number of times +/- buttons clicked: <span className="greenGlow">{numClicks}</span></h4>
      </div>
    );
  }
}


export default Counter;