import { BsMoonStarsFill, BsBrightnessHighFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkmodeContext";
import styles from "./css-modules/Navbar.module.css";

const Navbar = ({ status, setStatus }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const menu = ["All", "Active", "Completed"];
  const today = new Date();
  const [day, month, date] = today.toDateString().split(" ");
  console.log(status);
  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.darkmodeButton}>
        {darkMode ? <BsMoonStarsFill /> : <BsBrightnessHighFill />}
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
