import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {id: 'title'}, 'These are a few of Jeff\'s favorite things');
//colors:

const colorList = React.createElement('ol', {className: 'faveColors'},
                        React.createElement('li', {className: 'color'}, 'orange'), 
                        React.createElement('li', {className: 'color'}, 'blue'),
                        React.createElement('li', {className: 'color'}, 'green')
    );
const favColors = React.createElement('li', {className: 'listHeader'}, 'Favorite Colors:', colorList);
//music:
const musicList = React.createElement('ol', {className: 'faveMusic'},
                        React.createElement('li', {className: 'band'}, 'Cardiacs'), 
                        React.createElement('li', {className: 'band'}, 'Peter Gabriel'),
                        React.createElement('li', {className: 'band'}, 'Yes')
    );
const favMusic = React.createElement('li', {className: 'listHeader'}, 'Favorite Music:', musicList);
//food:
const foodList = React.createElement('ol', {className: 'faveFoods'},
                        React.createElement('li', {className: 'food'}, 'Black Forest Gateaux'), 
                        React.createElement('li', {className: 'food'}, 'Eclairs'),
                        React.createElement('li', {className: 'food'}, 'Sushi')
    );
const favFood = React.createElement('li', {className: 'listHeader'}, 'Favorite Foods:', foodList);
//sites:
const siteList = React.createElement('ol', {className: 'list'},
                        React.createElement('li', {className: 'site'}, 
                            React.createElement('a', {href: 'https://www.paintedbyjeff.com', target: '_blank'}, 'My Ancient Website')), 
                        React.createElement('li', {className: 'site'}, 
                            React.createElement('a', {href: 'https://codepen.io/coderJeff8170', target: '_blank'}, 'My CodePen')),
                        React.createElement('li', {className: 'site'}, 
                            React.createElement('a', {href: 'https://www.w3schools.com/', target: '_blank'}, 'My goto for truncated Dev reference'))
    );
const favSites = React.createElement('li', {className: 'listHeader'}, 'Favorite Websites:', siteList);



const list = React.createElement('ul', {id: 'faves list'}, favColors, favMusic, favFood, favSites);

ReactDOM.render(
    React.createElement('div',
     {},
     title,
     list
    ),
    document.getElementById('root')
);
