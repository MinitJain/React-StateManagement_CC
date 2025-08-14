// App.jsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, set } from "./store";

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <p>{value}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(set(100))}>Set to 100</button>
      <button onClick={() => dispatch(set(0))}>Reset</button>
    </>
  );
}
