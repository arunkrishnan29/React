// TASK 3: useRef — Focus an input without touching the DOM manually
// GOAL: Understand what a ref is for — getting a real HTML element
// reference, the React way (never document.querySelector in React).
//
// REQUIREMENTS:
// 1. Create a ref called `inputRef` using useRef(null).
// 2. Attach it to the <input> below using the `ref` prop.
// 3. Add a button "Focus the input" that, when clicked, runs
//    inputRef.current.focus() — this should move the cursor into
//    the text box automatically.
// 4. BONUS: add a second button "Clear" that sets
//    inputRef.current.value = "" to clear the text box directly.
//    (Note: this is one of the few times touching .value directly
//    is fine — refs exist exactly for this kind of direct DOM action.)
//
// HINT: const inputRef = useRef(null);
// HINT: <input ref={inputRef} placeholder="Click the button..." />
//
// HOW YOU'LL KNOW IT WORKS: clicking "Focus the input" should put the
// blinking cursor into the box without you clicking the box yourself.

import { useRef } from "react";

function FocusInput() {
  // TODO: create the ref here

  return (
    <div>
      <h2>Focus Demo</h2>
      {/* TODO: attach ref to this input */}
      <input placeholder="Click the button to focus me" />
      {/* TODO: add the focus button */}
    </div>
  );
}

export default FocusInput;
