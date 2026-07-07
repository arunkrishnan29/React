function SkillBoard() {
  const skills = [
    { id: 1, name: "React", level: "Beginner" },
    { id: 2, name: "JavaScript", level: "Intermediate" },
    { id: 3, name: "Java", level: "Intermediate" },
    { id: 4, name: "HTML/CSS", level: "Advanced" },
    { id: 5, name: "Vite", level: "Beginner" },
  ];

  return (
    <div>
      <h2>Skill Board</h2>

      {skills.map((skill) => {
        let color;

        if (skill.level === "Advanced") {
          color = "gold";
        } else if (skill.level === "Intermediate") {
          color = "skyblue";
        } else if (skill.level === "Beginner") {
          color = "lightgreen";
        }

        return (
          <p key={skill.id} style={{ color: color }}>
            {skill.name} - {skill.level}
          </p>
        );
      })}
    </div>
  );
}

export default SkillBoard;