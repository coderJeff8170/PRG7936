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
    return (
            <div >
              <div>
                <button onClick={onDecrement}>-</button>
                <div className="d-flex justify-content-center">
            <h1 className="readout">{count}</h1>
            
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