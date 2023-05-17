import "./CreateTodoButton.css";
import { useTodosContext } from "../../TodoContext/TodoContext";
export function CreateTodoButton() {
  const { setIsOpenModal, isOpenModal } = useTodosContext();
  return (
    <button
      className='modal-button'
      onClick={() => setIsOpenModal(!isOpenModal)}
    >
      Agregar nueva tarea
    </button>
  );
}
