function StudentInfo(props) {
  return(
    <div>
      <h2>{props.name}</h2>
      <p>College : {props.college}</p>
      <p>Department : {props.department}</p>
      <p>Age : {props.age}</p>
      <p>City : {props.city}</p>
    </div>
  )
}

export default StudentInfo;