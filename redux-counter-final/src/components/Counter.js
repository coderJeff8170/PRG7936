import React from 'react';

// const Counter = ({ count, numClicks, changeCount, onDecrement, onIncrement, onChangeCount, onUpdateCount }) => {

//     return (
//       <div>
//         <div>
//           <button onClick={onDecrement}>-</button>
//           <span>{count}</span>
//           <button onClick={onIncrement}>+</button>
//           <br />
//           <p>Number of times increment/decrement button has been clicked: {numClicks}</p>
//           <input type="number" onChange={(evt)=>onChangeCount(evt.target.value)} value={changeCount}></input>
//           <button onClick={onUpdateCount}>Change Count Number</button>
//         </div>
//       </div>
//     );
// }

class Counter extends React.Component {
  render(){
    const { count, numClicks, changeCount, onDecrement, onIncrement, onChangeCount, onUpdateCount } = this.props;
    return (
            <div>
              <div>
                <button onClick={onDecrement}>-</button>
                <span>{count}</span>
                <button onClick={onIncrement}>+</button>
                <br />
                <p>Number of times increment/decrement button has been clicked: {numClicks}</p>
                <input type="number" onChange={(evt)=>onChangeCount(evt.target.value)} value={changeCount}></input>
                <button onClick={onUpdateCount}>Change Count Number</button>
              </div>
            </div>
          );
  }
}


export default Counter;