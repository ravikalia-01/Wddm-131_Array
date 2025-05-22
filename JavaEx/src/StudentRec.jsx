import React from "react";


const students = [
    { id: 101, name: "Alice", grade: 85 },
    { id: 102, name: "Bob", grade: 45 },
    { id: 103, name: "Charlie", grade: 76 },
    { id: 104, name: "Diana", grade: 30 },
    { id: 101, name: "Alice", grade: 84 },
    { id: 102, name: "Bob", grade: 75 },
    { id: 103, name: "Charlie", grade: 91 },
    { id: 104, name: "Diana", grade: 65 },
    { id: 101, name: "Alice", grade: 59 },
    { id: 102, name: "Bob", grade: 78 },
    { id: 103, name: "Charlie", grade: 99 },
    { id: 104, name: "Diana", grade: 75 },
  ];

  const displayStu = students.map(function(student){
    return student;
  });

  console.log(displayStu);

  function DisplayListstu (){

    const listItems = students.map ((student,index) =>
    <li key={index}>{student.id}{student.name}{student.grade}</li>
);
return <ul>{listItems}</ul>;
}

export default DisplayListstu;
  