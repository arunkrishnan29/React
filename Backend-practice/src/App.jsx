import { useEffect, useState } from "react";

const URL = "https://dummyjson.com/test";

function App() {
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    const fun = async () => {
      let data = await fetch(URL);

      data.json().then((json) => {
        setTemp(json);
      });
    };

    fun();
  }, []);

  return (
    <div className="App">
      <h1>Method is {temp.method}</h1>
      <h1>Status is {temp.status}</h1>
    </div>
  );
}

export default App;