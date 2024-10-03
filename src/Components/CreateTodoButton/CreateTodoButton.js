import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./CreateTodoButton.css"

function CreateTodoButton(){

  const {setOpenModal} = React.useContext(TodoContext)

  return (
    <input type="button" onClick={()=>{
      setOpenModal(true);
      }} value="Agregar Tarea"/>
  ) 
}

export { CreateTodoButton };
  