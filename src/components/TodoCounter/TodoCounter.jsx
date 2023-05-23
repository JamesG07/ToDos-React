import { useTodosContext } from "../../TodoContext/TodoContext";
import "./TodoCounter.css";
export function TodoCounter() {
  const { totalTodos, completedTodos } = useTodosContext();
  let isCompleted = completedTodos === totalTodos;
  let nametasks = totalTodos > 1 ? "tareas" : "tarea";
  return (
    <>
      <h1 className='counter-title'>Bienvenido!</h1>
      {isCompleted ? (
        <p className='counter-text'>No tienes tareas pendientes</p>
      ) : (
        <p className='counter-text'>
          Has completado <span>{completedTodos}</span> de
          <span> {totalTodos} </span>
          {nametasks}
        </p>
      )}
    </>
  );
}
