import "./TodoSearch.css";
// import React from "react";
import { useTodosContext } from "../../TodoContext/TodoContext";
import iconSearch from "../../assets/search-svgrepo-com.svg";
export function TodoSearch() {
  const { setSearchValue } = useTodosContext();
  const saveData = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className='contaiener-input--search'>
      <input
        className='input-seach'
        type='search'
        placeholder='Busca tu tarea'
        autoFocus
        onChange={saveData}
        name='input'
      />

      <img src={iconSearch} className='icon-search'></img>
      <p>Lista de tareas</p>
    </div>
  );
}
