import { useState, useMemo, useCallback } from "react";

function SortedList({ list, sortFunction }) {
  const sortedList = useMemo(() => {
    console.log("Running Sort");
    return [...list].sort(sortFunction);
  }, [list, sortFunction]);
  return <div>{sortedList.join(", ")}</div>;
}

function App() {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(["Boxer", "Annie", "Dylan", "Chris"]);
  //   const sortedNames = useMemo(() => [...names].sort(), [names]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  //   const countTotal = useMemo(() => count1 + count2, [count1, count2]);

  const countTotal = count1 + count2;

  const sortFunction = useCallback((a, b) => a.localeCompare(b) * -1, []);
  return (
    <>
      Total: {total}
      <div> Names: {names.join(", ")} </div>
      <SortedList list={names} sortFunc={sortFunction} />
      <button onClick={() => setCount1(count1 + 1)}> Count1: {count1} </button>
      <button onClick={() => setCount2(count2 + 1)}> Count2: {count2} </button>
      <div>Total: {countTotal} </div>
    </>
  );
}

export default App;
