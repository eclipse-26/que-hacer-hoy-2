import { TodoProvider } from '../Components/TodoContext/TodoContext';
import './App.css';
import { AppUI } from './AppUI';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}







export default App;
