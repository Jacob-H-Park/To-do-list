import { useState } from "react";
import styles from "./css-modules/UserTodoInput.module.css";

const UserTodoInput = ({ dispatch }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "CREATE", name: newTodo });
    setNewTodo("");
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        onChange={handleChange}
        value={newTodo}
        name="todo"
        placeholder="Add Todo"
      />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default UserTodoInput;
