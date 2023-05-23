import "./TodoItem.css";
export function TodoItem({ text, completed, onComplete, onDelete }) {
  const spanClass = completed ? "check check--active" : "check";
  const textClass = completed ? "TodoItem-p completed" : "TodoItem-p";

  return (
    <li className='item-li'>
      <span onClick={onComplete} className={spanClass}>
        ✔
      </span>
      <p className={textClass}>{text} </p>
      <span onClick={onDelete} className='delete'>
        ✖
      </span>
    </li>
  );
}
