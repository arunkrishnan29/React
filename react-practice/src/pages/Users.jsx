// TASK 6: API Fetching — useState + useEffect + fetch
// GOAL: The single most important real-world pattern. We're using a
// free public fake backend (jsonplaceholder.typicode.com) so you get
// a REAL network request/response, exactly like a real project.
//
// URL to fetch: https://jsonplaceholder.typicode.com/users
// (open that URL in your browser first — that JSON array is what
// you're about to load into React state)
//
// REQUIREMENTS:
// 1. Create state: `users` (starts as []) and `loading` (starts as true).
// 2. Use useEffect with an empty dependency array [] to run ONCE when
//    the page loads.
// 3. Inside useEffect, fetch the URL above, and:
//    - while waiting, `loading` should stay true
//    - once data arrives, call setUsers(data) and setLoading(false)
// 4. While loading is true, render "Loading users...".
// 5. Once loaded, render each user's name and email in a list
//    (remember: key prop, use user.id).
//
// HINT structure (fetch returns a Promise, so you need .then twice,
// OR use async/await — try async/await, it's the modern standard):
//
// useEffect(() => {
//   async function loadUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     setUsers(data);
//     setLoading(false);
//   }
//   loadUsers();
// }, []);
//
// HOW YOU'LL KNOW IT WORKS: refresh the page — you should briefly see
// "Loading users..." then a real list of 10 names/emails appear.

import { useState, useEffect } from "react";

function Users() {
  // TODO: create users and loading state here

  // TODO: add the useEffect that fetches users here

  return (
    <div>
      <h2>Users (from a real API)</h2>
      {/* TODO: show "Loading users..." while loading */}
      {/* TODO: otherwise show the list of users */}
    </div>
  );
}

export default Users;
