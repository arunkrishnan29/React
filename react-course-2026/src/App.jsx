import Header from "./components/Header.jsx";
import StudentInfo from "./components/StudentInfo.jsx";
import Skills from "./components/Skills.jsx"
import Footer from "./components/Footer.jsx"
import Marks from "./components/Marks.jsx"
import Hobbies from "./components/Hobbies.jsx";

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
    </>
  );

}
export default App;