import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {
    item: toDos,
    saveItem,
    error,
    loading,
  } = useLocalStorage("TodosReact", []);

  const completedTodos = toDos.filter((item) => item.completed).length;
  let totalTodos = toDos.length;

  const searchedTodos = toDos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const searchText = searchValue.toLocaleLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...toDos];
    const todoIndex = newTodos.findIndex((item) => item.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveItem(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...toDos];
    const todoIndex = newTodos.findIndex((item) => item.text == text);
    newTodos.splice(todoIndex, 1);
    saveItem(newTodos);
  };
  const addNewTodo = (text) => {
    const newTodos = [...toDos];
    let isEqual = newTodos.some((item) => item.text == text);
    if (isEqual) {
      alert("ya esxiste la tarea");
    } else {
      newTodos.push({ text, completed: false });
      saveItem(newTodos);
    }
  };

  const value = {
    loading,
    addNewTodo,
    error,
    completedTodos,
    totalTodos,
    toDos,
    setSearchValue,
    deleteTodo,
    completeTodo,
    searchedTodos,
    isOpenModal,
    setIsOpenModal,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export function useTodosContext() {
  return useContext(TodoContext);
}
