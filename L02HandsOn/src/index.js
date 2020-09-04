import React from 'react';
import ReactDOM from 'react-dom';

const stateInfo = (state, population, capital) => {
    return(
        <table>
            <tr>
            <th>{state}</th>
            <th>{population}</th>
            <th>{capital}</th>
            </tr>
        </table>
        
    )

};

ReactDOM.render(
    stateInfo('State', 'Population', 'Capital'),
    document.getElementById('root')
);