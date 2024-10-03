import React from 'react';
import './TodoCounter.css'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoCounter(){

    const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return(
        completedTodos === totalTodos && totalTodos !== 0 ?
        <div className="app__header">
            <h2>Tareas completadas con exito</h2>
        </div>
        :
        <div className="app__header">
            <h2>Tareas completadas</h2>
            <span>{completedTodos} / {totalTodos}</span>
        </div>
    )
}

export { TodoCounter };
  