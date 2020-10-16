import React from 'react';

const Updater = ({onChangeCount, changeCount, onUpdateCount}) => {
    return(
        <div className="updater">
            <input className="inputField" type="number" onChange={(evt)=>onChangeCount(evt.target.value)} value={changeCount}></input>
            <button className="baseButton inputBtn" onClick={onUpdateCount}>Change Count Number</button>
        </div>
    );
    }

export default Updater;