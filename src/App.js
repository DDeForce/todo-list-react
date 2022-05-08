import "./App.css";

import { ModalsProvider } from "./contexts/ModalsProvider";
import { TodosProvider } from "./contexts/TodosProvider";

import Todos from "./components/Todos";

function App() {
  return (
    <ModalsProvider>
      <TodosProvider>
        <Todos />
      </TodosProvider>
    </ModalsProvider>
  );
}

export default App;
