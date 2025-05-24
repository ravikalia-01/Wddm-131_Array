import React, { useState } from "react";
import "./StudentRec2.css";

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
  return grade >= 60 ? "Pass" : "Fail";
};

function DisplayListstu3() {
  const [filter, setFilter] = useState("All");

  // Filter student list based on Pass/Fail/All
  const filteredStudents = students.filter((student) => {
    if (filter === "Pass") return student.grade >= 60;
    if (filter === "Fail") return student.grade < 60;
    return true;
  });

  return (
    <div className="mdiv">
      <h1>Student Records</h1>
      <div className="btn-group">
        <button onClick={() => setFilter("Pass")}>Show Pass</button>
        <button onClick={() => setFilter("Fail")}>Show Fail</button>
        <button onClick={() => setFilter("All")}>Show All</button>
      </div>
      <table className="tbm">
        <thead>
          <tr className="th">
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr className="dt" key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
              <td
                style={{
                  color: student.grade >= 60 ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {getStatus(student.grade)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayListstu3;
