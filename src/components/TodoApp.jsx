import { useContext } from "react";
import { TodoContext } from "../context/TodoStateContext";

import TodoList from "./TodoList";
import UserTodoInput from "./UserTodoInput";
import styles from "./css-modules/TodoApp.module.css";

const TodoApp = ({ status }) => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <section className={styles.container}>
      <TodoList status={status} todos={todos} dispatch={dispatch} />
      <UserTodoInput dispatch={dispatch} />
    </section>
  );
};

export default TodoApp;
