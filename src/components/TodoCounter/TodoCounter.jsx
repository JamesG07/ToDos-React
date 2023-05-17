import { useTodosContext } from "../../TodoContext/TodoContext";
export function TodoCounter() {
  const { totalTodos, completedTodos } = useTodosContext();
  let isCompleted = completedTodos === totalTodos;
  // totalTodos === 0 ? localStorage.removeItem("TodosReact") : null;
  return (
    <>
      {isCompleted ? (
        <h1>
          Has completado <br /> todas tus tareas 🎇🎉
        </h1>
      ) : (
        <h1>
          Has completado {completedTodos} de {totalTodos} <br /> tareas
        </h1>
      )}
    </>
  );
}
