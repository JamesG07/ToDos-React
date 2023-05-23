import "./TodoForm.css";
import { useTodosContext } from "../../TodoContext/TodoContext";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
export default function TodoForm() {
  const { setIsOpenModal, addNewTodo, errorAddNewTask } = useTodosContext();
  const [newTodoValue, setNewTodoValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTodo(newTodoValue);
    // setErrorAddNewTask(" ");
  };
  const saveNewToDo = (e) => {
    setNewTodoValue(e.target.value.trim());
  };

  return (
    <>
      <div className='container-form'>
        <form className='form' onSubmit={handleSubmit}>
          <ErrorMessage errorAddNewTask={errorAddNewTask} />
          <label>Nombre de la tarea</label>
          <textarea
            onChange={saveNewToDo}
            placeholder='Añade una nueva tarea '
          ></textarea>
          <div className='container-btns'>
            <button
              type='button'
              onClick={() => setIsOpenModal(false)}
              className='btn-form btn-form-cancel'
            >
              Cerrar
            </button>
            <button type='submit' className='btn-form btn-form-add'>
              Añadir
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
