import React from 'react';
import ReactDOM from 'react-dom';

// sorry Shaun, I got carried away...
// simulate fetched data
let data = [
    {state: 'Idaho', pop: null, capital: 'Boise'},
    {state: 'Tennessee', pop: 6.651, capital: 'Nashville'},
    {state: 'Maine', pop: 1.331, capital: 'Augusta'},
    {state: 'Wisconsin', pop: 5.779, capital: 'Madison'},
    ];

// jsObject styling (after finding what a pain global element styling without a library in React can be):
// const tableStyle = {
//     fontFamily: 'helvetica, arial, sansSerif',
//     width: '500px',
//     textAlign: 'center',
//     borderSpacing: '0'
// }

// const cellStyle = {
//     border: '1px solid black',
//     padding: '5px 10px'
// }

// create column heads
const tableHead = () => {
    return(
        <thead>
            <tr>
                <th>State</th>
                <th>Population</th>
                <th>Capital</th>
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
            <td>{state}</td>
            <td>{pop>0?`${pop} million`:''}</td>
            <td>{capital}</td>
        </tr>
    )
};

// fulfill stateInfo functional component requirement
// which creates entire table
const stateInfo = (info) => {
    return(
        <table>
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