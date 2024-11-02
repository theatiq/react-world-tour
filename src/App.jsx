import { useState } from "react";

import "./App.css";
import Countires from "./components/Countires/Countires";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React World Tour</h1>
      <Countires></Countires>
    </>
  );
}

export default App;
