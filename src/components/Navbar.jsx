import { useContext } from "react";
import { TodoContext } from "../context/TodoStateContext";
import { CgDarkMode } from "react-icons/cg";
import styles from "./css-modules/Navbar.module.css";

const Navbar = ({ status, setStatus }) => {
  const menu = ["All", "Active", "Completed"];
  const today = new Date();
  const [day, month, date, year] = today.toDateString().split(" ");
  console.log(status);
  return (
    <header className={styles.header}>
      <button className={styles.darkmodeButton}>
        <CgDarkMode />
      </button>
      <span className={styles.date}>{`${month} ${date} - ${day}`}</span>
      <ul className={styles.tabs}>
        {menu.map((tab, idx) => (
          <li key={idx}>
            <button
              className={`${styles.tab} ${tab === status && styles.selected}`}
              onClick={() => {
                setStatus(tab);
              }}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Navbar;
