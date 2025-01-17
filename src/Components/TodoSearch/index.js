import React from 'react';

function TodoSearch({searchValue, setSearchValue}){
  return (
    <input 
    placeholder="Buscar tarea..." 
    value={searchValue}
    onChange={(e)=>{
      setSearchValue(e.target.value)
    }}
    className='border w-full rounded-lg px-2 py-1'
    />
  ) 
}

export { TodoSearch };
  