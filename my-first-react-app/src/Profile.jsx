function Profile({ name, skills, isStudent}){
  return(
    <>
      <h2>{name}</h2>
      
      <p>Skills: {skills.join(',')}</p>
    
    <p>
      Status : {isStudent ? "Student" : "professional"}    
    </p>
    </>
  );
}
export default Profile;