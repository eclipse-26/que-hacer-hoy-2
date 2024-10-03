import React from 'react';
import './TodosLoading.css'

function TodosLoading(){

  return (
    <div className='app__loading'>
        <div className='loading__title'></div>
        <div className='loading__search'></div>
        <div className='loading__list__task'>
            <div className='loading__task'></div>
            <div className='loading__task'></div>
            <div className='loading__task'></div>
        </div>
    </div>
  ) 
}

export { TodosLoading };