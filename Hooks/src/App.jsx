import React from "react";

function App() {
  const handleSave = () => {
    // get the value of the input field named "name" and display it in an alert message
    const name = document.getElementById("name");
    if (!name.value || name.value.length < 2) {
      alert(
        !name.value ? "Please Enter a name" : "Name must have 2 characters"
      );
    } else {
      alert(`${name.value} saved`);
    }
  };
  return (
    <div>
      <h1>StudyToNight</h1>
      <div>
        <input type="text" id="name" placeholder="what is your name ?" />
      </div>
      <button onMouseOver={handleSave}>Enter</button>
    </div>
  );
}

export default App;
