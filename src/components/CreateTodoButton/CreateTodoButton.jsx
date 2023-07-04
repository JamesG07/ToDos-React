import "./CreateTodoButton.css";
import icon2 from "../../assets/plus-circle-svgrepo-com.svg";
export function CreateTodoButton({ setIsOpenModal, isOpenModal }) {
  return (
    <img
      className='modal-button'
      onClick={() => setIsOpenModal(!isOpenModal)}
      src={icon2}
    ></img>
  );
}
