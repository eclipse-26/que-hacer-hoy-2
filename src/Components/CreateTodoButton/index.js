import React from "react";
import { IoMdAdd } from "react-icons/io";

function CreateTodoButton({setOpenModal}){

  return (
    <button onClick={()=>{
      setOpenModal(true);
      }}
      className='
      bg-orange-500 text-white font-medium p-1 px-4 rounded-lg shadow-md flex items-center gap-1
      transition ease-in-out duration-100  
      hover:bg-orange-600
        
      '
      >Agregar tarea <IoMdAdd className="text-lg"/></button>
  ) 
}

export { CreateTodoButton };
  