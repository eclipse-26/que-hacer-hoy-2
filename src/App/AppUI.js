import React from "react";
import { TodoCounter } from '../Components/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch';
import { TodoList } from '../Components/TodoList';
import { CreateTodoButton } from '../Components/CreateTodoButton';
import { TodoItem } from '../Components/TodoItem';
import { TodosLoading } from '../Components/TodosLoading';
import { TodosError } from '../Components/TodosError';
import { TodosEmpty } from '../Components/TodosEmpty';
import { TodoContext } from "../Components/TodoContext";
import { Modal } from "../Components/Modal";
import { FormCreateTodo } from "../Components/FormCreateTodo";



function AppUI(){

const { 
  loading,
  error,
  searchedTodos,
  totalTodos,
  completeTodo,
  deleteTodo,
  openModal
} = React.useContext(TodoContext);

return(
    <div className="bg-slate-100 w-full h-full flex flex-col gap-10 py-28 px-5">
      {loading && <TodosLoading />}
      {error && <TodosError />}
      
      {!loading && 
        <div className='flex items-center justify-center'>
          <div className='bg-white border border-gray-300 w-[450px] rounded-lg shadow-lg px-4 py-6 flex flex-col items-center gap-6
            sm:min-w-96
          '>
            <TodoCounter />
            <TodoSearch />
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
            <CreateTodoButton />
            {openModal &&
            <Modal>
              <FormCreateTodo />
            </Modal>
            }
          </div>
          </div>
      }
      
    </div>
)
}

export {AppUI}