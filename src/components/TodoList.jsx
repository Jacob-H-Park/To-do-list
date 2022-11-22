import CreateItem from "./CreateItem";
import { useContext } from "react";
import { TodoContext } from "../context/TodoStateContext";
import styles from "./css-modules/TodoList.module.css";

const TodoList = ({ status }) => {
  const { todos, dispatch } = useContext(TodoContext);
  let filteredTodos;
  if (status === "Active") {
    filteredTodos = todos.filter((el) => el.isComplete === false);
  } else if (status === "Completed") {
    filteredTodos = todos.filter((el) => el.isComplete === true);
  } else {
    filteredTodos = todos;
  }
  return (
    <ul className={styles.list}>
      {filteredTodos.map((todo) => (
        <CreateItem todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};

export default TodoList;
