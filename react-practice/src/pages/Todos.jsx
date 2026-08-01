// TASK 7: API Calling / Mutation — POST and DELETE
// GOAL: Practice the "get, then change" pattern real projects use
// constantly (add to cart, create order, delete item, etc).
//
// We're using https://jsonplaceholder.typicode.com/todos — a fake API
// that PRETENDS to save your changes (it responds like a real backend
// would, but doesn't actually persist anything — perfect for practice,
// zero risk of breaking real data).
//
// REQUIREMENTS — build this in 3 steps, test each before moving on:
//
// STEP A (GET — you already did this in Users.jsx, repeat it here):
//   1. Create state: `todos` (starts as []).
//   2. In useEffect (empty dependency array), fetch:
//        https://jsonplaceholder.typicode.com/todos?_limit=5
//      (the ?_limit=5 query parameter keeps the list small)
//   3. Save the result into `todos` state and render each todo's
//      `title` in a list (key = todo.id).
//
// STEP B (POST — create a new todo):
//   1. Create a controlled input + state `newTodoTitle` (starts as "").
//   2. Add an "Add Todo" button. On click:
//      - POST to https://jsonplaceholder.typicode.com/todos
//      - send a request body: { title: newTodoTitle, completed: false }
//      - the fake API will respond with the "created" todo (with an id)
//      - add that returned todo to your `todos` state using the spread
//        operator: setTodos([...todos, newTodo])
//      - clear the input: setNewTodoTitle("")
//
//   HINT for a POST request with fetch:
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ title: newTodoTitle, completed: false }),
//   });
//   const newTodo = await response.json();
//
// STEP C (DELETE — remove a todo):
//   1. Add a "Delete" button next to each todo in the list.
//   2. On click, send a DELETE request to:
//        https://jsonplaceholder.typicode.com/todos/{id}
//   3. After the request succeeds, remove that todo from state using
//      .filter() — never mutate the array directly:
//        setTodos(todos.filter((todo) => todo.id !== idToDelete))
//
// HOW YOU'LL KNOW IT WORKS: typing a title and clicking "Add Todo"
// should instantly show a new item in the list (no refresh). Clicking
// "Delete" on any item should instantly remove just that one item.

import { useState, useEffect } from "react";

function Todos() {
  // TODO: STEP A — todos state + useEffect fetch

  // TODO: STEP B — newTodoTitle state + addTodo function

  // TODO: STEP C — deleteTodo function

  return (
    <div>
      <h2>Todos (real API mutation practice)</h2>

      {/* TODO: controlled input + "Add Todo" button (Step B) */}

      <ul>
        {/* TODO: map over todos, show title + a "Delete" button (Step C) */}
      </ul>
    </div>
  );
}

export default Todos;
