import { useState, useEffect } from "react";

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetch(`/${selectedName}.json`)
      .then((response) => response.json())
      .then((data) => setNames(data));
  }, [selectedName]);

  const [selectedName, setSelectedName] = useState(null);

  return (
    <div>
      <div>
        {names.map((name) => (
          <button onClick={() => setSelectedName(name)}>{name} </button>
        ))}
      </div>
      <div>{selectedName}</div>
    </div>
  );
}

export default App;
