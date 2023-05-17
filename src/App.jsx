import { TodoProvider } from "./TodoContext/TodoContext";
import { AppUi } from "./components/AppUi/AppUi";
import "./App.css";

export function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}
