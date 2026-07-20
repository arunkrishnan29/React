function Hobbies({hobbies}){
  return(
    <div>
    <h2>Hobbies</h2>

    <ul> 
      {hobbies.map((hobby,index)=>(
      <li key={index}> {hobby}</li>
      ))}
    </ul>
    </div>
  );
}

export default Hobbies;