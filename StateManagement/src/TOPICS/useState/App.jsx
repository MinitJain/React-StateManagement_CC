import { useState } from "react";
import "../../app.css";

function NameList() {
  const [list, setList] = useState(["Jack", "John", "Jill"]);
  const [name, setName] = useState(() => "Jack"); // input field will show jack already written in it

  const onAddName = () => {
    setList([...list, name]); // list.push(name) or setList(name) wont work, [name is immutable state]
    setName(""); // clear input field
  };

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name} </li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}> Add Name</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NameList />
    </>
  );
}

export default App;
