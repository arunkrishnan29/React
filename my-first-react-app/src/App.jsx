import Profile from "./Profile";
import ActionPanel from"./ActionPanel";
import UserCard from "./UserCard";
import SkillBoard from "./SkillBoard";


function App() {
  return (
    <>
      <Profile
        name="Arun"
        skills={["React", "JavaScript", "Vite"]}
        isStudent={true}
      />

      <Profile
        name="Harish"
        skills={["Django", "Python", "SQL"]}
        isStudent={false}
      />

      <Profile 
      name="Aadhi"
      skills={["C programming, Python , Github"]}
      isStudent={true}
      />
      <ActionPanel/>
      <UserCard
      name="Arun"
      isPremium={true}
      messageCount={77}
      status="online"
      />

      <UserCard
      name="Harish"
      isPremium={false}
      messageCount={0}
      status="offline"
      />

      <UserCard
      name="Mani"
      isPremium={true}
      messageCount={5}
      status="busy"
      />
 
      <UserCard
      name="Aadhi"
      isPremium={false}
      messageCount={8}
      status=""
      />
  <SkillBoard/>
   </>

  );
}
export default App;