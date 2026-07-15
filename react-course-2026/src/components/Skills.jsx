function Skills() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "C Programming"
  ];

  return (
    <div>

      <h2>Skills</h2>

      <p>{skills.join(", ")}</p>

    </div>
  );

}

export default Skills;