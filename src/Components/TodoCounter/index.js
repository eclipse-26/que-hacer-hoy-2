import React from 'react';
import { TodoContext } from '../TodoContext';
import { IoIosAdd } from 'react-icons/io';

function TodoCounter(){

    const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return(
        completedTodos === totalTodos && totalTodos !== 0 ?
        <div className="w-full text-center">
            <h2 className='uppercase font-medium text-lg'>Tareas completadas con exito</h2>
            
        </div>
        :
        <div className="w-full text-center">
            <h2 className='uppercase font-medium text-lg'>Tareas completadas</h2>
            <span>{completedTodos} / {totalTodos}</span>
        </div>
    )
}

export { TodoCounter };
  