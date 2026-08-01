// TASK 2: useEffect — Live Clock
// GOAL: Understand the dependency array and cleanup functions.
//
// REQUIREMENTS:
// 1. Create state called `time`, starting as `new Date()`.
// 2. Display the time using time.toLocaleTimeString() inside an <h2>.
// 3. Use useEffect to set up a setInterval that updates `time` to
//    `new Date()` every 1000ms (1 second).
// 4. IMPORTANT: useEffect must return a cleanup function that calls
//    clearInterval — otherwise you'll create a new interval every time
//    this component re-renders, and they'll stack up forever (a real bug
//    that shows up in real apps).
// 5. The dependency array should be `[]` — we only want to set up ONE
//    interval, when the component is first created.
//
// HINT structure:
// useEffect(() => {
//   const intervalId = setInterval(() => {
//     setTime(new Date());
//   }, 1000);
//
//   return () => clearInterval(intervalId); // cleanup
// }, []);
//
// HOW YOU'LL KNOW IT WORKS: the clock should tick every second without
// you touching anything. If you see it lag or the page seems to slow
// down over time, you forgot the cleanup function.

import { useState, useEffect } from "react";

function Clock() {
  // TODO: create the time state here
  const [time,setTime]=useState(new Date());



useEffect(()=>{
  const intervalId=setInterval(()=>{
    setTime(new Date());
  },1000);

    return () => clearInterval(intervalId);},[]
  );
 
 
 
    return (
    <div>
      <h2>Live Clock</h2>
     <h2>{time.toLocaleTimeString()}</h2> 

    </div>
  );
}

export default Clock;
