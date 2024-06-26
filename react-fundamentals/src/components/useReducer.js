import { useReducer, useState } from "react";
import { generateUUID } from "../utils";

function jokeReducer(state, action) {
  switch (action.type) {
    case "add_joke": {
      return [...state, { id: generateUUID(), text: action.joke }];
    }
    case "delete_joke": {
      return state.filter((temp) => temp.id != action.id);
    }
  }
}

export default function UseReducer() {
  const myId = useId();

  const [inputJoke, setInputJoke] = useState("");
  const [jokes, dispatch] = useReducer(jokeReducer, []);

  return (
    <div
      style={{
        width: "500px",
        height: "600px",
        backgroundColor: "blue",
        marginLeft: "30%",
      }}
    >
      <input
        placeholder="add a joke"
        value={inputJoke}
        onChange={(e) => (e.target.value ? setInputJoke(e.target.value) : true)}
      ></input>
      <button
        onClick={() => {
          if (inputJoke) {
            dispatch({ type: "add_joke", joke: inputJoke });
            setInputJoke("");
          }
        }}
      >
        Add joke
      </button>
      <div style={{ margin: "20px" }}>
        {jokes.map((joke) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div>{joke.text}</div>
            <button
              onClick={() => {
                dispatch({ type: "delete_joke", id: joke.id });
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
