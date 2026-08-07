import Header from "./components/Header.jsx";
import StudentInfo from "./components/StudentInfo.jsx";
import Skills from "./components/Skills.jsx"
import Footer from "./components/Footer.jsx"
import Marks from "./components/Marks.jsx"
import Hobbies from "./components/Hobbies.jsx";
import Counter from "./components/tasks/Counter.jsx"
import Clock from "./components/tasks/Clock.jsx"
import FocusInput from "./components/tasks/FocusInput.jsx"
import SearchableSkills from "./components/tasks/SearchableSkills.jsx"

function display(){
  console.log("Hello Everyone");
  
}
function displayname(e){
  console.log(`Hello ${e}`);

}
function displayinput(e){
  console.log(e);
}

function App(){

  const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "C Programming"
  ];

  const hobbies=[
    "Gaming",
    "Coding",
    "Music",
  ];

  return (
    <>

    <Header />

    <StudentInfo
    name="Arunkrishnan"
    college="Mahendra Engineering college"
    department="CyberSecurity"
    city="Salem"
    age={20}
    />
    
    <Skills skills={skills} />

    <Marks
      marks={76}
    />

    <Hobbies
    hobbies={hobbies}    
    />

    <Footer/>
<button onClick={display}>
  Click Me
</button>

<br />

<button onClick={() => displayname("Arunkrishnan")}>
  Know Name?
</button>

<br />
<br />

<input
  placeholder="Enter text"
  onChange={(e) => displayinput(e.target.value)}
/>

<Counter />

<Clock />

<FocusInput />

<SearchableSkills skills={skills} />
    </>
  );

}
export default App;