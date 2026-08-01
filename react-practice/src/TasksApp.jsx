// This file wires all 8 practice tasks together so you can see them
// on one page as you complete them. See TASKS.md at the project root
// for full instructions on each task and how to run this file.
//
// Nothing to implement here — just uncomment components as you finish
// building them, one at a time, top to bottom.

import Counter from "./components/tasks/Counter.jsx";
import Clock from "./components/tasks/Clock.jsx";
import FocusInput from "./components/tasks/FocusInput.jsx";
import SearchableSkills from "./components/tasks/SearchableSkills.jsx";
import CartDemo from "./components/tasks/cart/CartDemo.jsx";
import Users from "./pages/Users.jsx";
import Todos from "./pages/Todos.jsx";

const mySkills = ["HTML", "CSS", "JavaScript", "React", "C Programming"];

function TasksApp() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>React Practice Tasks</h1>

      <hr />
      <Counter />

      <hr />
      <Clock />

      <hr />
      <FocusInput />

      <hr />
      <SearchableSkills skills={mySkills} />

      <hr />
      <CartDemo />

      <hr />
      <Users />

      <hr />
      <Todos />
    </div>
  );
}

export default TasksApp;
