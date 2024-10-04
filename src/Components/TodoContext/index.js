import React from "react";
import { useLocalStorage } from "../../CustomHooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider( {children} ){

    const defaultTodos = [
        { text: "Revisar Freelance", completed: true},
        { text: "Trabajar CS360", completed: true},
        { text: "Estudiar React.js", completed: false},
        { text: "Ir al Gym", completed: false},
      ]
    
    //   const defaultTodos = []
    
      const {
        item: todos, 
        saveItems: saveTodos, 
        loading,
        error
      } = useLocalStorage('TODOS_V1', defaultTodos);
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => 
        !!todo.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(todo =>{
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
      })
    
      const completeTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          todo => todo.text === text
        )
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          todo => todo.text === text
        )
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }

      const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({ text: `${text}`, completed: false})
        saveTodos(newTodos);
      }

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };