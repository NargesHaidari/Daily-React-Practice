// import React from 'react'

export default function StudentCard({name , age , grade}) {
  return (
    <div className="student-card">
        <h2>Name : {name}</h2>
        <p>Age : {age}</p>
        <p>Grade : {grade}</p>
    </div>
  )
}
