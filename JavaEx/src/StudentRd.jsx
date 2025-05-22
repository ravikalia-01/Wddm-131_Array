import React from "react";

// Sample student data
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

// Function to determine pass/fail status
const getStatus = (grade) => {
  return grade >= 50 ? "Pass" : "Fail";
};

// React component to display student table
function DisplayListstu2() {
  return (
    <div className="mdiv">
      <h1>Student Records</h1>
      <table className="tbm" border="1" cellPadding="10">
        <thead>
          <tr>
            <th className="id1">ID</th>
            <th className="nm">Name</th>
            <th className="gr">Grade</th>
            <th className="st">Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td style={{ color: getStatus(student.grade) === "Pass" ? "green" : "red" }}>
                {getStatus(student.grade)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayListstu2;
