import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

/*
Requirements

Create a component named App which returns any other components created [X]
Render the App component [X]
Create a component named NumberOfStudents [X]
Add a state field within NumberOfStudents with two fields: enrolledStudents and waitlistedStudents [X]
Create two buttons that, when clicked, will increase the number of enrolled students or waitlisted students by one. 
Hint! You will need two different functions [X]

Create two input fields that each have a button: one for the enrolled students and one for waitlisted students. When a number is entered, the number of the enrolled or waitlisted students should increase by that specified amount.[X]
Display the number of Enrolled and Waitlisted students on the page. [X]
Include labels as shown in the example below.[X]
*/

//reusable functional component as interface for each type of student
const StudentIncrementInterface = props => {
    return(
        <div>
            <h1>{props.studentType} Students: {props.studentCount}</h1>
            <button onClick={props.plusOne}>Add 1 {props.studentType} Student</button>
            <h3>Add multiple {props.studentType} Students</h3>
            <input type="number" onChange={props.changeStudentAmt} value={props.studentAmt}></input>
            <button onClick={props.updateStudentAmt}>Increase {props.studentType} Students</button>
        </div>
    );
}

// stateful component to store dependent states, render interfaces, and pass props to interfaces
class NumberOfStudents extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            enrolledStudents: 0,
            studentsToEnroll: 0,
            waitListedStudents: 0,
            studentsToWait: 0
        };
    }

    /*------------ methods for Enrolled Students -------------*/

    //increment
    onIncrementEnrolled(){
        this.setState({
            enrolledStudents: this.state.enrolledStudents + 1
        });
    }

    //handle change in Enrolled Students to add
    onChangeEnrolledAmt(e) {
        this.setState({
            studentsToEnroll: e.target.value
        });
    }

    //update Enrolled Students
    onUpdateEnrolledAmt(){
        this.setState({
            enrolledStudents: this.state.enrolledStudents + parseInt(this.state.studentsToEnroll)
        });
    }

    /*------------ methods for WaitListed Students -------------*/

    //increment
    onIncrementWaitListed(){
        this.setState({
            waitListedStudents: this.state.waitListedStudents + 1
        });
    }
    //handle change in WaitListed Students to add
    onChangeWaitListedAmt(e) {
        this.setState({
            studentsToWait: e.target.value
        });
    }

    //update WaitListed Students
    onUpdateWaitListedAmt(){
        this.setState({
            waitListedStudents: this.state.waitListedStudents + parseInt(this.state.studentsToWait)
        });
    }

    //use a reusable stateless component for each kind of student?
    render(){
        return(
            <div>
                <StudentIncrementInterface 
                    studentType="Enrolled"
                    studentCount={this.state.enrolledStudents}
                    plusOne={this.onIncrementEnrolled.bind(this)}
                    studentAmt={this.state.studentsToEnroll}
                    changeStudentAmt={this.onChangeEnrolledAmt.bind(this)}
                    updateStudentAmt={this.onUpdateEnrolledAmt.bind(this)}
                />
                <StudentIncrementInterface 
                    studentType="WaitListed"
                    studentCount={this.state.waitListedStudents}
                    plusOne={this.onIncrementWaitListed.bind(this)}
                    studentAmt={this.state.studentsToWait}
                    changeStudentAmt={this.onChangeWaitListedAmt.bind(this)}
                    updateStudentAmt={this.onUpdateWaitListedAmt.bind(this)}
                />
            </div>
        )
    }
}
// App renders App!
const App = props => {
    return (
    <NumberOfStudents />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));