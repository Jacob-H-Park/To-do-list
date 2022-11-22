import { useState, useEffect, useContext, createContext } from "react";

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  const [darkMode, setDarkMode] = useState("false");
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    updateDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const updateDarkMode = (darkMode) => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
};

export default DarkModeContextProvider;

export const useDarkMode = () => useContext(DarkModeContext);
