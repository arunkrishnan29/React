// TASK 1: useState — Counter
// GOAL: Practice the core rule of state — you never mutate a variable
// directly, you always call the updater function.
//
// REQUIREMENTS:
// 1. Create state called `count`, starting at 0.
// 2. Render the count inside an <h2>.
// 3. Add three buttons: "+1", "-1", "Reset".
//    - "+1" increases count by 1
//    - "-1" decreases count by 1
//    - "Reset" sets count back to 0
// 4. BONUS: disable the "-1" button when count is 0 (use the ternary
//    operator you already used in Marks.jsx: props.marks >= 50 ? ... : ...)
//
// HINT: import { useState } from "react";
// HINT: const [count, setCount] = useState(0);
// HINT: never write count = count + 1. Always setCount(count + 1).
//
// HOW YOU'LL KNOW IT WORKS: clicking +1 should visibly update the number
// on screen immediately, with no page reload.

import React, { useState } from "react";

function Counter() {
 // const[count,setCount]=React.useState(0);
 // we imported useState so we dont need react.useState but we can use just useState
 
 const[count,setCount]=useState(0);
 
 function increaseCount(){
  setCount(prev => prev + 1);
 }

  function decreaseCount(){
  
    count>0?setCount(prev => prev - 1):setCount(count);
 }

  function resetCount(){
    setCount(0);
  }

  return (
    <div>
      <h2>The count is {count}</h2>
      <button style={{ marginRight: '12px',marginLeft:'12px' }} onClick={increaseCount}> +1 </button>

      <button style={{ marginRight: '12px' ,marginLeft:'12px'} } onClick={decreaseCount}
        disabled={count === 0}
        > -1 </button>

      <button style={{ marginRight: '12px' ,marginLeft:'12px'}} onClick={resetCount}> Reset </button>
    </div>
  );
}

export default Counter;
