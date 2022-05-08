import { ModalsProvider } from "./contexts/ModalsProvider";
import { TodosProvider } from "./contexts/TodosProvider";

import Todos from "./components/Todos";

// css styled-components
import { ThemeProvider } from "styled-components";
import { theme } from "./css/Theme";
import GlobalStyles from "./css/Global";

function App() {
  return (
    <ModalsProvider>
      <TodosProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Todos />
        </ThemeProvider>
      </TodosProvider>
    </ModalsProvider>
  );
}

export default App;
