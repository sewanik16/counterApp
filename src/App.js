import "./styles.css";
import { useState } from "react";
function App() {
  let [ck, setck] = useState(0);
  let click = () => {
    setck(ck + 1);
  };
  return (
    <div className="App">
      <h1 onClick={click}>click</h1>
      <h2>{ck}</h2>
    </div>
  );
}
export default App;
