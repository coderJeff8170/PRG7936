import React from 'react';

class Counter extends React.Component {

  playSound = () => {
    const audio = new Audio("https://paintedbyjeff.com/FCC/MC-303samples/MC-303 Woodblock L.wav");
    audio.volume = .2;
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
            <div>
              <div>
                <button onClick={onDecrement}>-</button>
                <span>{count}</span>
                <button onClick={onIncrement}>+</button>
                <br />
                <p>Number of times increment/decrement button has been clicked: {numClicks}</p>
              </div>
            </div>
          );
  }
}


export default Counter;