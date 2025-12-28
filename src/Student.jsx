import React from 'react'

function Students(props) {
  return (
    <div>
   <h1> student name is: {props.student.name}</h1>
    <h2>student name is: {props.student.age}</h2>
    <h2>student name is:{props.student.gender}</h2>
    </div>
  )
}

export default Students