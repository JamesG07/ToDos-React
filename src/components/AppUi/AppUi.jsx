import { CreateTodoButton } from "../../components/CreateTodoButton/CreateTodoButton";
import { TodoCounter } from "../../components/TodoCounter/TodoCounter";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { TodoList } from "../../components/TodoList/TodoList";
import { TodoSearch } from "../../components/TodoSearch/TodoSearch";
import Loading from "../../components/Loading/Loading";
import { useTodosContext } from "../../TodoContext/TodoContext";
import Modal from "../../Modal/Modal";
import TodoForm from "../TodoForm/TodoForm";
export function AppUi() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    isOpenModal,
  } = useTodosContext();
  return (
    <>
      <div className='container'>
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
          {!loading && searchedTodos.length === 0 && (
            <h2>Crea un nuevo ToDo</h2>
          )}
          {searchedTodos.map((item) => (
            <TodoItem
              text={item.text}
              key={item.text}
              completed={item.completed}
              onComplete={() => completeTodo(item.text)}
              onDelete={() => deleteTodo(item.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
        {isOpenModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </div>
    </>
  );
}
