import { useState } from "react";

function App() {
  const [color, setColor] = useState("yellow");
  return (
    <>
      <div
        className="w-full h-screen bg-black flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="bg-white fixed flex justify-center gap-4 flex-wrap flex-row bottom-12 p-5">
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 px-3 py-2 rounded-2xl"
          >
            red
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-600 px-3 py-2 rounded-2xl"
          >
            blue
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-600 px-3 py-2 rounded-2xl"
          >
            green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
