import { useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <h1>Todo List!</h1>
      <div className="Form">
        <InputField text={text} handleSubmit={addTask} handleInput={setText} />
        <hr />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
