import "./TodoList.css";
export function TodoList({ children }) {
  return <ul className='todoList'>{children}</ul>;
}
