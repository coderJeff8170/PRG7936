import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/*



Requirements
Add the code for the following requirements within the src/index.js file:

Create a component named App which returns any other components created [X]
Render the App component [X]
Create a component named NumberOfStudents [X]
Add a state field within NumberOfStudents with two fields: enrolledStudents and waitlistedStudents [X]
Create two buttons that, when clicked, will increase the number of enrolled students or waitlisted students by one. [X]
Hint! You will need two different functions [X]

Create two input fields that each have a button: one for the enrolled students and one for waitlisted students. When a number is entered, the number of the enrolled or waitlisted students should increase by that specified amount.[X]
Display the number of Enrolled and Waitlisted students on the page. [X]
Include labels as shown in the example below.[X]
*/

class NumberOfStudents extends React.Component {
    constructor(){
        super();

        this.state = {
            enrolledStudents: 0,
            studentsToEnroll: 0,
            waitListedStudents: 0,
            studentsToWait: 0
        };
    }

    //create function to increase enrolled students by 1

    incrementEnrolledStudents(){
        this.setState({
            enrolledStudents: this.state.enrolledStudents + 1
        });
    }

    //create function to increase waitlisted students by 1

    incrementWaitListedStudents(){
        this.setState({
            waitListedStudents: this.state.waitListedStudents + 1
        });
    }

    //can we do this with just 1 function?


    //use a reusable stateless component for each kind of student?
    render(){
        return(
            <div>
                
                <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
                <button
                onClick={this.incrementEnrolledStudents.bind(this)}>
                Add 1 Enrolled Student
                </button>
                <h3>Add multiple Enrolled Students</h3>
                <input 
                onChange={event=>this.setState({studentsToEnroll: event.target.value})}
                value={this.state.studentsToEnroll}
                >
                </input>
                <button
                onClick={()=>{this.setState({enrolledStudents: this.state.enrolledStudents + parseInt(this.state.studentsToEnroll)})}}
                >Increase Enrolled Students</button>
                


                <h1>WaitListed Students: {this.state.waitListedStudents}</h1>
                <button onClick={this.incrementWaitListedStudents.bind(this)}>Add 1 Wait Listed Student</button>
                <h3>Add multiple WaitListed Students</h3>
                <input
                onChange={event=>this.setState({studentsToWait: event.target.value})}
                value={this.state.studentsToWait}
                >
                </input>
                <button
                onClick={()=>this.setState({waitListedStudents: this.state.waitListedStudents + parseInt(this.state.studentsToWait)})}
                >Increase WaitListed Students</button>
            </div>
        )
    }
}

const App = props => {
    return (
    <NumberOfStudents />
    )
}



ReactDOM.render(<App />, document.getElementById('root'));