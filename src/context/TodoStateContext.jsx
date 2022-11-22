import { useState, useEffect, useReducer, createContext } from "react";
import todoReducer from "../reducer/todo-reducer";

export const TodoContext = createContext();

export default function TodoContextProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, [
    { name: "", isComplete: false },
  ]);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
