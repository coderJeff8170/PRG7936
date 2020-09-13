// import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

/* ------------Part 1 ----------*/

// class Hello extends React.Component {
//     render() {
//         return(
//             <div>
//                 <h1>Hello {this.props.name}</h1>
//             </div>

//         );
//     }
// }

// const App = props => {
//     return (
//         <div>
//             <Hello name="poopGoat" />
//             <Hello name="peepSheep" />
//             <Hello name="buddyGump" />
//         </div>

//     );
// }


/* ------------Part 2 ----------*/


// //make a stateful component with a state that holds the balance of a checking and savings account
// class BankAccount extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: 'Jeff Andrews',
//             address: '3939 Woodgreen',
//             telephone: '704-555-5555',
//             accounts: {
//                 checking: {
//                     accountBalance: 250.36
//                 },
//                 savings: {
//                     accountBalance: 143.22
//                 }
//             }
//         }
//     }
//     render() {
//         return(
//             <div>
//                 <h1>Name: {this.state.name}</h1>
//                 <h3>Checking Account Balance: {this.state.accounts.checking.accountBalance}</h3>
//                 <h3>Savings Account Balance: {this.state.accounts.savings.accountBalance}</h3>
//             </div>
//         );
//     }
// }
// //make a stateless component called App that renders everything

// const App = props => {
//     return (
//         <div>
//             <BankAccount />
//         </div>
//     );
// }


// ReactDOM.render(<App />, document.getElementById('root'));