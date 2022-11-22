import { useState } from "react";
import Navbar from "./components/Navbar";
import TodoApp from "./components/TodoApp";
import TodoContextProvider from "./context/TodoStateContext";
import DarkModeContextProvider from "./context/DarkmodeContext";

export default function App() {
  const [status, setStatus] = useState("All");
  return (
    <TodoContextProvider>
      <DarkModeContextProvider>
        <Navbar status={status} setStatus={setStatus} />
        <TodoApp status={status} />
      </DarkModeContextProvider>
    </TodoContextProvider>
  );
}
