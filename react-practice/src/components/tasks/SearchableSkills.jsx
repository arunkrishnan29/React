// TASK 4: Controlled Input — Search/filter a list
// GOAL: Combine useState + controlled input + array filtering, using
// the same `skills` data pattern you already used in Skills.jsx.
//
// REQUIREMENTS:
// 1. Accept a `skills` prop (an array of strings) — same shape as
//    your existing Skills.jsx component.
// 2. Create state called `searchTerm`, starting as "".
// 3. Render a text input that is a CONTROLLED INPUT:
//      value={searchTerm}
//      onChange={(e) => setSearchTerm(e.target.value)}
// 4. Below the input, render only the skills that include the
//    searchTerm (case-insensitive). Use .filter() before .map().
// 5. If no skills match, show the text "No skills found".
//
// HINT: skill.toLowerCase().includes(searchTerm.toLowerCase())
//
// HOW YOU'LL KNOW IT WORKS: typing "java" should instantly narrow the
// list to just "JavaScript" (if that's in your skills array), with no
// button click needed — that's the point of a controlled input.

import { useState } from "react";
import { skills }from "../SkillBoard";

function SearchableSkills(skills) {

  const[searchTerm,setSearchTerm]=useState("");


  search((v)=>{
    setSearchTerm(v);
  })

  // TODO: create a filtered array here using .filter()
  
  return (
    <div>
      <h2>Search Skills</h2>

      <input 
        value={searchTerm}
        onChange={()=> search(searchTerm)}
        <ul>
        {skills.map("searchtearm")}
      </ul>
      {/* TODO: show "No skills found" when filtered list is empty */}
    </div>
  );
}

export default SearchableSkills;
