import React from "react";
import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch/TodoSearch';
import { TodoList } from '../Components/TodoList/TodoList';
import { CreateTodoButton } from '../Components/CreateTodoButton/CreateTodoButton';
import { TodoItem } from '../Components/TodoItem/TodoItem';
import { TodosLoading } from '../Components/TodosLoading/TodosLoading';
import { TodosError } from '../Components/TodosError/TodosError';
import { TodosEmpty } from '../Components/TodosEmpty/TodosEmpty';
import { TodoContext } from "../Components/TodoContext/TodoContext";
import { Modal } from "../Components/Modal/Modal";
import { FormCreateTodo } from "../Components/FormCreateTodo/FormCreateTodo";



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
    <>
    <h1>¿Qué hacer hoy?</h1>
    {loading && <TodosLoading />}
    {error && <TodosError />}
    
    {!loading && 
      <div className='app'>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
        {(!loading && totalTodos.length === 0) && <TodosEmpty />}
        {(!loading && searchedTodos.length === 0) && <p>Sin resultados...</p>}          
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
    }
      
    </>
)
}

export {AppUI}