import React from "react";
import './Task.css'

const Task = ({ task }) => {
    if(task.length === 0 ) return null 
  return (
      <>
      <div className="bg text-white p-3 mb-3">
        <p className=" bold">Name: <span className="normal">{task.name}</span></p>
        <p className=" bold">Description: <span className="normal">{task.description}</span></p>
        <p className=" bold">Date: <span className="normal">{task.date}</span></p>
      <button className="btn btn-danger btn-block ">DELETE &times;</button>

      </div>
</>
  );
};

export default Task;
