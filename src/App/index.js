import { useTodos } from './useTodos';
import { TodosLoading } from '../Components/TodosLoading'
import { TodosError } from '../Components/TodosError'
import { TodoHeader } from '../Components/TodoHeader'
import { TodoCounter } from '../Components/TodoCounter'
import { TodoSearch } from '../Components/TodoSearch'
import { TodosEmpty } from '../Components/TodosEmpty'
import { TodoList } from '../Components/TodoList'
import { TodoItem } from '../Components/TodoItem'
import { CreateTodoButton } from '../Components/CreateTodoButton'
import { Modal } from '../Components/Modal'
import { FormCreateTodo } from '../Components/FormCreateTodo'


function App() {

  const { 
    loading,
    error,
    searchedTodos,
    totalTodos,
    completeTodo,
    deleteTodo,
    openModal,
    completedTodos,
    searchValue, 
    setSearchValue, 
    setOpenModal,
    addTodo
  } = useTodos();

  return (
    <div className="bg-slate-100 w-full h-full flex flex-col gap-10 py-28 px-5">
      {loading && <TodosLoading />}
      {error && <TodosError />}
      
      {!loading && 
        <div className='flex items-center justify-center'>
          <div className='bg-white border border-gray-300 w-[450px] rounded-lg shadow-lg px-4 py-6 flex flex-col items-center gap-6
            sm:min-w-96
          '>
            <TodoHeader>
              <TodoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos} 
              />
              <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </TodoHeader>
            <TodoList>
            {(totalTodos === 0) && <TodosEmpty />}
            {(!loading && searchedTodos.length === 0 && totalTodos !== 0) && <p>Sin resultados...</p>}          
            {!loading && searchedTodos.map(todo => (
              <TodoItem
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={()=>completeTodo(todo.text)}
                onDelete={()=>deleteTodo(todo.text)}
              />
            ))}
            </TodoList>
            <CreateTodoButton setOpenModal={setOpenModal} />
            {openModal &&
            <Modal setOpenModal={setOpenModal}>
              <FormCreateTodo 
                setOpenModal={setOpenModal} 
                addTodo={addTodo}
              />
            </Modal>
            }
          </div>
          </div>
      }
      
    </div>
  );
}







export default App;
