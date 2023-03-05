import React, {useState} from "react";
import "./style/style.css";
import Node from "./components/node";

export default function App() {
  const [data, setData] = useState("")
  // const root = new Node(data);
console.log(data?.split(" "))

  return (
    <div className="App">
      <label htmlFor="">Enter letters:</label>
      <input onChange={(e) => setData(e.target.value)}/>
      <Node data={data} />
    </div>
  );
}
