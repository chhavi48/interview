import { useState } from "react";
import Fetch from "./DataFetch/Fetch";
import "./styles.css";

export default function App() {
  const [count, setcount] = useState(0);
  const handleadd = (value) => {
    setcount(value + count);
  };
  return (
    <div className="App">
      <Fetch />
      {/* <button onClick={() => handleadd(1)}>+</button>
      {count}
      <button onClick={() => handleadd(-1)}>-</button> */}
    </div>
  );
}
