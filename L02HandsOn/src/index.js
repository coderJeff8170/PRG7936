import React from 'react';
import ReactDOM from 'react-dom';

// sorry Shaun, I got carried away...
let data = [
    {state: 'Idaho', pop: null, capital: 'Boise'},
    {state: 'Tennessee', pop: 6.651, capital: 'Nashville'},
    {state: 'Maine', pop: 1.331, capital: 'Augusta'},
    {state: 'Wisconsin', pop: 5.779, capital: 'Madison'},
    ];

// *finds out what a pain in the butt global styling can be in react* jsObject styling:
const tableStyle = {
    fontFamily: 'helvetica, arial, sansSerif',
    width: '500px',
    textAlign: 'center',
    borderSpacing: '0'
}

const cellStyle = {
    border: '1px solid black',
    padding: '5px 10px'
}

// create column heads
const tableHead = () => {
    return(
        <thead>
            <tr style={{fontWeight: 'bold'}}>
                <th style = {cellStyle}>State</th>
                <th style = {cellStyle}>Population</th>
                <th style = {cellStyle}>Capital</th>
            </tr>
        </thead>
    )
};

// dynamically create rows
const tableRow = (state, pop, capital, i) => {
    return(
        <tr 
            key={i}
            style={i%2==0?{background: '#ddd'}:{background: 'white'}}
        >
            <td style = {cellStyle}>{state}</td>
            <td style = {cellStyle}>{pop>0?`${pop} million`:''}</td>
            <td style = {cellStyle}>{capital}</td>
        </tr>
    )
};

// fulfill stateInfo functional component requirement
// which creates entire table
const stateInfo = (info) => {
    return(
        <table style={tableStyle}>
            {tableHead()}
            <tbody>
                {info.map((el, i)=>(tableRow(el.state, el.pop, el.capital, i)))}
            </tbody>
        </table>
    )
};

// render to DOM
ReactDOM.render(
    stateInfo(data),
    document.getElementById('root')
);