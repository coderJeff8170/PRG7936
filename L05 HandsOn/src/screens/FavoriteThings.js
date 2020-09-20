import React from 'react';
import Title from '../components/Title';
import Things from './Things';
import {Route, Link} from 'react-router-dom';

const FavoriteThings = ({ match}) => (
    <div>
        <Title title="These are a few of my favorite things."/>
        <ul>
            <li><Link to={`${match.url}/e-type-jaguar`}>Favorite Car</Link></li>
            <li><Link to={`${match.url}/fish-n-chips`}>Favorite Food</Link></li>
            <li><Link to={`${match.url}/lock-stock-and-two-smoking-barrels`}>Favorite Movie</Link></li>
        </ul>
        <Route path={`${match.url}/:thingId`} component={Things}/>
        <Route exact path={match.url} render={()=><h3>please select a thing.</h3>}/>
    </div>
    );

export default FavoriteThings;