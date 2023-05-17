import "./TodoSearch.css";
import { useTodosContext } from "../../TodoContext/TodoContext";
export function TodoSearch() {
  const { setSearchValue } = useTodosContext();
  const saveData = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <input
      className='input-seach'
      type='search'
      placeholder='Buscar todos'
      autoFocus
      onChange={saveData}
    ></input>
  );
}
