
function SkillBoard() {
  const skills = [
    {
     id:1,
     name:"react",
     level:"advanced", 
    },
    {
     id:2,
     name:"js",
     level:"intermediate", 
    },
    {
     id:3,
     name:"html & css",
     level:"beginner", 
    }
  ];

  return (
    <div>
      <h2> My Skills </h2>

      {skills.map((skill) =>{
        let color="";
        if (skill.level=="advanced"){
          color="gold";
        }
        else if(skill.level=="intermediate"){
          color="skyblue";
        }
        else{
          color="lightgreen";
        }
        <p style={{
            
          backgroundColor: color
          }}> 
          </p>
        <div key={skill.id}>
          <h3>{skill.name}</h3>
          <p>{skill.level}</p>
        </div>

      })
      }
    </div>
  );
}

export default SkillBoard;