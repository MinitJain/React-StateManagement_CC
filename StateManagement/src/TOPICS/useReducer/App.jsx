import { useReducer } from "react";

function UseForm() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      return {
        ...state,
        ...action,
      };
    },
    {
      first: "",
      last: "",
    }
  );
  return (
    <div>
      <input
        type="text"
        value={state.first}
        onChange={(e) => dispatch({ first: e.target.value })}
      />
      <input
        type="text"
        value={state.last}
        onChange={(e) => dispatch({ last: e.target.value })}
      />
      <div>{state.first} </div>
      <div>{state.last} </div>
    </div>
  );
}

function NameList() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return {
            ...state,
            names: [...state.names, action.payload],
            name: "",
          };
        default:
          return state;
      }
    },
    {
      names: ["john"],
      name: "pablo",
    }
  );

  return (
    <>
      <div>
        {state.names.map((name, index) => (
          <div key={index}> {name} </div>
        ))}
      </div>
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button
        onClick={() => dispatch({ type: "ADD_NAME", payload: state.name })}
      >
        Add Name
      </button>
    </>
  );
}

function App() {
  return (
    <div>
      <NameList />
      <UseForm />
    </div>
  );
}

export default App;
