import { BsTrash } from "react-icons/bs";
import styles from "./css-modules/CreateItem.module.css";

const CreateItem = ({ todo, dispatch }) => {
  const handleChange = () => {
    dispatch({ type: "UPDATE", todo });
  };
  return (
    <li
      className={`${styles.todo} ${styles.list} ${
        todo.isComplete && styles.completed
      }`}
    >
      <input
        className={styles.checkbox}
        onChange={handleChange}
        checked={todo.isComplete}
        //why does not setting checked property automatically check the box on re-render?
        type="checkbox"
      />
      <span className={styles.text}>{todo.name}</span>

      <span
        onClick={() => {
          dispatch({ type: "DELETE", todo });
        }}
        className={styles.icon}
      >
        <button className={styles.button}>
          <BsTrash />
        </button>
      </span>
    </li>
  );
};

export default CreateItem;
