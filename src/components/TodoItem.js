import { useDispatch } from "react-redux";
import { removeTodo, toggleComplete } from "../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <li>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleComplete({ id }))}
        />
        <span>{text}</span>
      </li>
      <button className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </button>
    </div>
  );
};

export default TodoItem;
