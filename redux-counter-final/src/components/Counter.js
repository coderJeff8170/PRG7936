import React from 'react';


class Counter extends React.Component {

  play = () => {
    this.player.currentTime = 0;
    this.player.volume = .2;
    this.player.play();
  }
  //should component update to prevent playing when using updater component?

  componentDidUpdate(){
    console.log('component updated!');
    this.play();
  }

  render(){
    const { count, numClicks, onDecrement, onIncrement } = this.props;
    return (
            <div>
              <div>
                <button onClick={onDecrement}>-</button>
                <span>{count}</span>
                <audio ref={ref => this.player = ref} src="https://paintedbyjeff.com/FCC/MC-303samples/MC-303 Woodblock L.wav"></audio>
                <button onClick={onIncrement}>+</button>
                <br />
                <p>Number of times increment/decrement button has been clicked: {numClicks}</p>
                
              </div>
            </div>
          );
  }
}


export default Counter;