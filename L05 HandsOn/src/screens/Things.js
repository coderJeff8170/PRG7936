import React from 'react';

const Things = ({ match }) => (
        <div>
            <h3>{match.params.thingId}</h3>
        </div>
    );

export default Things;