import Header from "./components/Header.jsx";
import StudentInfo from "./components/StudentInfo.jsx";
import Skills from "./components/Skills.jsx"
import Footer from "./components/Footer.jsx"
import Marks from "./components/Marks.jsx"
import Hobbies from "./components/Hobbies.jsx";

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
    <br></br>

    <button onClick={()=>displayname("arunkrishnan")}>
      Know Name?
    <br />
    <br />

    <input 
    placeholder="enter text" onChange={(e) => displayinput(e.target.value)} >

    </input>

    </button>

    </>
  );

}
export default App;