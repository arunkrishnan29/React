function StudentInfo() {
  const student = {
  name: "Arunkrishnan",
  college: "Mahendra Engineering College",
  age: 20,
  department: "Cyber Security",
  city: "Salem"
  };
  return(
    <div>
      <h2>{student.name}</h2>
      <p>College : {student.college}</p>
      <p>Department : {student.department}</p>
      <p>Age : {student.age}</p>
      <p>City : {student.city}</p>
    </div>
  )
}

export default StudentInfo;