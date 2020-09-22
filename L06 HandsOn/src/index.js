/* ---------------------------------  Step 1 -------------------------------- */

//Convert the given JavaScript into ES6 syntax using an arrow function and filter. [X]

const arr = [
    {"name":"chevy", "count": 2},
    {"name":"ford", "count": 5},
    {"name":"acura", "count": 3},
    {"name":"honda", "count": 16},
];

//const newArr = [];

// for(let i= 0; i < arr.length; i++){
//     if(arr[i].name === "ford" ){
//         newArr.push(arr[i]);
//     }
// }

//console.log("Filter results:", newArr);

const newArr = arr.filter(item => item.name==="ford");

console.log("Filter results:", newArr);

/* ---------------------------------  Step 2 -------------------------------- */

// Given the function, use the ES6 that was covered to combine the two arrays. [X]
// ('arr' renamed to 'students' to avoid conflict with step 1 in console)

const students = ['Bill', 'Joe', 'Emily', 'Andrea']
const newStudents = ['Andrew', 'Tasha', 'Carol', 'George'];

// function addNewStudent(array, newArray) {
//     for(let i = 0; i < newArray.length; i++) {
//         array.push(newArray[i]);
//     }
// }

// addNewStudent(arr, newStudents);

// function addNewStudent(array, newArray) {
// return [...array, ...newArray];
// }
//const allStudents = addNewStudent(students, newStudents);

        // ^^ ok....

const allStudents = [...students, ...newStudents];

        // better!

console.log(allStudents);