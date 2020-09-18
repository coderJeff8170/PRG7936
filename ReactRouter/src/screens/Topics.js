import React from 'react';
import Topic from './Topic';
import { Route, Link }  from 'react-router-dom';

const Topics = ({ match }) => (
    <div>
        <h3>Topics</h3>
        <ul>
            <li><Link to={`${match.url}/rendering`}>Rendering</Link></li>
            <li><Link to={`${match.url}/components`}>Components!</Link></li>
            <li><Link to={`${match.url}/prop-v-state`}>Props vs State</Link></li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route exact path={match.url} render={()=><h3>please select a topic.</h3>} />
    </div>
);

export default Topics;