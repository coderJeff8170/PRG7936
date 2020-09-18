import React from 'react';
import ReactDOM from 'react-dom';
import Home from './screens/Home';
import About from './screens/About';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


const App = () => (
    <Router>
        <div>
            <h1>I'm alive</h1>
            <Home />
        </div>
    </Router>
);


ReactDOM.render(<App />, document.getElementById('root'));