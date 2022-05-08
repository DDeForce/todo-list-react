import "./App.css";

import { ModalsProvider } from "./contexts/ModalsProvider";

import Todos from "./components/Todos";

function App() {
  return (
    <ModalsProvider>
      <Todos />
    </ModalsProvider>
  );
}

export default App;
