import "./TodoForm.css";
import { useTodosContext } from "../../TodoContext/TodoContext";
import { useState } from "react";
export default function TodoForm() {
  const { setIsOpenModal, addNewTodo } = useTodosContext();
  const [newTodoValue, setNewTodoValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    addNewTodo(newTodoValue);
    setIsOpenModal(false);
  };
  const saveNewToDo = (e) => {
    setNewTodoValue(e.target.value.trim());
  };

  return (
    <>
      <div className='container-form'>
        <form className='form' onSubmit={handleSubmit}>
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
