import "./App.css";
import Card from "./component/Card";

function App() {
  return (
    <>
      <p className="read-the-docs text-red-800">
        Click on the Vite and React logos to learn more
      </p>
      <Card username="Rajpatidar__00" bio="we'll meet again. Right ?" />
      <Card />
    </>
  );
}

export default App;
