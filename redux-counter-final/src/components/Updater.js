import React from 'react';

const Updater = ({onChangeCount, changeCount, onUpdateCount}) => {
    return(
        <div>
            <input type="number" onChange={(evt)=>onChangeCount(evt.target.value)} value={changeCount}></input>
            <button onClick={onUpdateCount}>Change Count Number</button>
        </div>
    );
    }

export default Updater;