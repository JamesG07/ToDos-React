import { CreateTodoButton } from "../../components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../../components/TodoCounter/TodoCounter";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { TodoList } from "../../components/TodoList/TodoList";
import { TodoSearch } from "../../components/TodoSearch/TodoSearch";
import Loading from "../../components/Loading/Loading";
import { useTodosContext } from "../../TodoContext/TodoContext";
import Modal from "../../Modal/Modal";
import TodoForm from "../TodoForm/TodoForm";
import NoTask from "../NoTask/NoTask";
export function AppUi() {
  window.addEventListener("click", (e) => {
    if (e.target.className === "container-modal") {
      setIsOpenModal(false);
    }
  });
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    isOpenModal,
    setIsOpenModal,
  } = useTodosContext();
  return (
    <>
      <div className='container'>
        <main className='main-app'>
          <TodoCounter />
          <TodoSearch />
          <TodoList>
            {loading && (
              <>
                <Loading />
                <Loading />
                <Loading />
              </>
            )}
            {error && <h2>error</h2>}
            {!loading && searchedTodos.length === 0 && <NoTask />}
            {searchedTodos.map((item, index) => (
              <TodoItem
                key={index}
                text={item.text}
                completed={item.completed}
                onComplete={() => completeTodo(item.text)}
                onDelete={() => deleteTodo(item.text)}
              />
            ))}
          </TodoList>
          <CreateTodoButton />
          <a href='https://www.linkedin.com/in/jhonjamesbedoya/'>
            By<span> Jhon James</span>
          </a>
          {isOpenModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
        </main>
      </div>
    </>
  );
}
