# React Practice Tasks

8 tasks, in order. Each one is a real skeleton file already sitting in
your `src/` folder with `TODO` comments telling you exactly what to
write. I did not solve them — you build the logic.

## How to run these

Your `main.jsx` currently renders `<App />` (your student profile
project). To work on these tasks without breaking that project:

1. Open `src/main.jsx`
2. Temporarily change:
   ```jsx
   import App from "./App";
   ...
   <App />
   ```
   to:
   ```jsx
   import App from "./TasksApp";
   ...
   <App />
   ```
3. Run `npm run dev` and open the local URL it gives you.
4. Work through the files below, top to bottom. Save each file —
   Vite auto-refreshes the page.
5. When you're done practicing, change `main.jsx` back to `./App` to
   see your original student profile project again.

`TasksApp.jsx` (at `src/TasksApp.jsx`) renders all 8 tasks stacked on
one page so you can see your progress live.

## The 8 tasks (do them in this order)

| # | Concept | File | What it teaches |
|---|---------|------|------------------|
| 1 | **useState** | `src/components/tasks/Counter.jsx` | state + updater function, never mutate directly |
| 2 | **useEffect** | `src/components/tasks/Clock.jsx` | dependency array `[]`, cleanup functions |
| 3 | **useRef** | `src/components/tasks/FocusInput.jsx` | accessing real DOM elements the React way |
| 4 | **Controlled input** | `src/components/tasks/SearchableSkills.jsx` | value + onChange, filtering data live |
| 5 | **Lifting state up** | `src/components/tasks/cart/CartDemo.jsx` + `Product.jsx` + `CartSummary.jsx` | sharing state between sibling components through a parent |
| 6 | **API fetching** | `src/pages/Users.jsx` | useState + useEffect + fetch, loading states |
| 7 | **API calling (mutation)** | `src/pages/Todos.jsx` | POST and DELETE requests, updating state after |

Task 5 is three files — build `Product.jsx` first, then
`CartSummary.jsx`, then `CartDemo.jsx` last (it's the parent that ties
the other two together, so it makes more sense once you've read both).

## Rules while doing these

- **Don't look up the answer.** If you're stuck for more than ~10
  minutes on one task, come back and ask — tell me exactly what you
  tried and what happened, and I'll help you debug rather than hand
  you the fix.
- **Read the browser console** whenever something doesn't work. React
  and Vite give very specific error messages — they usually tell you
  the exact line and problem.
- **Do them in order.** Task 5 (lifting state up) only makes sense
  once useState (task 1) is solid. Tasks 6–7 (API) only make sense
  once you're comfortable with useEffect (task 2).

## When you finish all 8

Come back and tell me — I'll quiz you on each concept verbally (no
code) to confirm it's actually stuck, not just copy-typed. That's the
real test before you jump into a live project.
