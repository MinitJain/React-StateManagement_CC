import { useReducer } from "react";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        // state.name = action.payload
        // return state ❌❌
        case " ADD_NAME":
          return {
            ...state,
            names: [...state.names, action.payload],
            name: "",
          };
      }
    },
    {
      names: [],
      name: "",
    }
  );
  return (
    <>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button onClick={(e) => dispatch({ type: "ADD_NAME" })}>Add Name</button>
    </>
  );
}

export default App;
