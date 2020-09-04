import React from 'react';
import ReactDOM from 'react-dom';

// sorry Shaun, I got carried away...
let data = [
    {state: 'Idaho', pop: null, capital: 'Boise'},
    {state: 'Tennessee', pop: 6.651, capital: 'Nashville'},
    {state: 'Maine', pop: 1.331, capital: 'Augusta'},
    {state: 'Wisconsin', pop: 5.779, capital: 'Madison'},
    ];


const tableHead = () => {
    return(
        <thead>
            <tr style={{fontWeight: 'bold'}}>
                <td>State</td>
                <td>Population</td>
                <td>Capital</td>
            </tr>
        </thead>

    )

}
const stateInfo = (state, pop, capital, i) => {
    return(
        //<style>{"table{border:1px solid black;}"}</style> -> figure this out
        //put the thead in here, and then the map function?
        <tr 
            key={i}
            style={i%2==0?{background: '#ddd'}:{background: 'white'}}
            // style={{background: '#ddd'}}
        >
            <td>{state}</td>
            <td>{pop>0?`${pop} million`:''}</td>
            <td>{capital}</td>
        </tr>
    )
};

ReactDOM.render(
    <table>
        {tableHead()}
        <tbody>
        {data.map((el, i)=>(stateInfo(el.state, el.pop, el.capital, i)))}
        </tbody>
        
    </table>,
    document.getElementById('root')
);