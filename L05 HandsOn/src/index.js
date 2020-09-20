import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import FavoriteThings from './screens/FavoriteThings';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

/*
Requirements

Step 1
Create 4 components within separate files:
Home.js [X]
About.js [X]
FavoriteThings.js [X]
Things.js [X]

Step 2
Be able to route between each of the pages [X]
Remember the import statements needed at the top of each file. [X]

Step 3
Within the FavoriteThings component, be able to click on at least 3 different things: Car, Food, Movie [X]
Based on the thing you click, you should then and render the specific Car, Food or Movie onto the page and in the URL.
Hint! Use match.url

*/


const App = () => (
    <Router>
        <div className="container">
            <h1 className="text-center">Jeff Andrews</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/FavoriteThings">FavoriteThings</Link></li>
            </ul>
            <hr></hr>
            <Route exact path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/FavoriteThings" component={FavoriteThings}/>
        </div>
    </Router>
);


ReactDOM.render(<App />, document.getElementById('root'));