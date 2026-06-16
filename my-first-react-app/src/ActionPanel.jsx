function ActionPanel() {
  function sayHello(name) {
    console.log("Hello", name);
  }

  function showAlert() {
    alert("React event handling works!");
  }

  function handleLog(number) {
    console.log(number);
  }

  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <>
      <h2>Panel Actions</h2>

      <button onClick={() => sayHello("Arun")}>
        Say Hello
      </button>

      <button onClick={showAlert}>
        Show Alert
      </button>

      <button onClick={() => handleLog(42)}>
        Log Number
      </button>

      <input
        type="text"
        onChange={handleChange}
        placeholder="Type something..."
      />
    </>
  );
}

export default ActionPanel;