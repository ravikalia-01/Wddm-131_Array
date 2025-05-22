import React from 'react';

function ReactEvent() {

  function fun(){
    alert("This is an example of React Event");
  }
  // Arrow function
  // const fun = () => alert("This is an example of React Event");

  const funwithparam = (name) => alert("This is an example of Function with Parameter: "+name);
  return (
    <>
    <button onClick={fun}>Event Call</button>
    <button onClick={()=>funwithparam("ReactJS")}>Function with Parameter</button>

    </>
  );
}

export default ReactEvent;


