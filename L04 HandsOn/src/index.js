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
            enrolledStudentsToAdd: 0,
            waitListedStudents: 0,
            waitListedStudentsToAdd: 0
        };
    }

    //increment refactor:
    onIncrement(studentType){
        this.setState({
            [studentType]: this.state[studentType] + 1
        });
    }

    //student Amount refactor
    onChangeStudentAmt(e, studentType){
        const studentTypeToAdd = `${studentType}ToAdd`
        this.setState({
            [studentTypeToAdd]: e.target.value
        })
    }

    //Update refactor
    onUpdateStudentAmt(studentType){
        const studentTypeToAdd = `${studentType}ToAdd`
        this.setState({
            [studentType]: this.state[studentType] + parseInt(this.state[studentTypeToAdd])
        })
    }

    //use a reusable stateless component for each kind of student
    render(){
        return(
            <div>
                <StudentIncrementInterface 
                    studentType="Enrolled"
                    studentCount={this.state.enrolledStudents}
                    plusOne={()=>{this.onIncrement("enrolledStudents")}}
                    studentAmt={this.state.studentsToEnroll}
                    changeStudentAmt={(e)=>{this.onChangeStudentAmt(e, "enrolledStudents")}}
                    updateStudentAmt={()=>{this.onUpdateStudentAmt("enrolledStudents")}}
                />
                <StudentIncrementInterface 
                    studentType="WaitListed"
                    studentCount={this.state.waitListedStudents}
                    plusOne={()=>{this.onIncrement("waitListedStudents")}}
                    studentAmt={this.state.studentsToWait}
                    changeStudentAmt={(e)=>{this.onChangeStudentAmt(e, "waitListedStudents")}}
                    updateStudentAmt={()=>{this.onUpdateStudentAmt("waitListedStudents")}}
                />
            </div>
        )
    }
}

// App renders 'NumberOfStudents' Component
const App = props => {
    return (
    <NumberOfStudents />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));