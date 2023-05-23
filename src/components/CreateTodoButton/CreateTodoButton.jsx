import "./CreateTodoButton.css";
import icon2 from "../../assets/plus-circle-svgrepo-com.svg";
import { useTodosContext } from "../../TodoContext/TodoContext";
export function CreateTodoButton() {
  const { setIsOpenModal, isOpenModal } = useTodosContext();
  return (
    <img
      className='modal-button'
      onClick={() => setIsOpenModal(!isOpenModal)}
      src={icon2}
    ></img>
  );
}
