function App() {
  const name = "Arunkrishnan";
  const college = "BE Cyber Security";
  const year = 3;
  const city = "Salem";

  return (
    <>
      <h1>React Learning</h1>

      <h2>Name: {name}</h2>

      <p>Course: {college}</p>

      <p>Year: {year}</p>

      <p>City: {city}</p>

      <h3>Next Year: {year + 1}</h3>
    </>
  );
}

export default App;