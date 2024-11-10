import "./App.css";
import { useCallback, useState, useEffect } from "react";

function App() {
  const [lenght, setLenght] = useState(8);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const genrator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (number) {
      str += "0123456789";
    }
    if (char) {
      str += "!@#$%^&*()";
    }

    for (let i = 1; i < lenght; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPassword(pass);
  }, [lenght, char, number]);

  useEffect(() => {
    genrator();
  }, [lenght, number, char]);

  return (
    <>
      <div className="w-full h-screen bg-black text-white flex items-center justify-center flex-col">
        <div className="flex bg-blue-400 p-3 flex-row items-center justify-center">
          <input
            className="p-3 text-black"
            type="text"
            value={password}
            readOnly
          />
          <button className="p-3 rounded-xl bg-blue-800">copy</button>
        </div>
        <div className="flex flex-row items-center justify-center">
          <div>
            <input
              name="label"
              type="range"
              min="8"
              max="20"
              onChange={(e) => setLenght(e.target.value)}
              value={lenght}
            />
            <label htmlFor="lenght">Lenght: {lenght}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={number}
              name=""
              id=""
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="Number">Number</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={char}
              name=""
              id=""
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="Charachter">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
