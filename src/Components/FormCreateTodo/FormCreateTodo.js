import React from "react";
import "./FormCreateTodo.css"
import { TodoContext } from "../TodoContext/TodoContext";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function FormCreateTodo(){

    const {setOpenModal, addTodo} = React.useContext(TodoContext)

    const onSubmit = (e) =>{
            e.preventDefault();
            const newTodo = document.getElementById("new__todo").value;
            if(newTodo !== ""){
                addTodo(newTodo)
                setOpenModal(false)
            }else{
                alert("¡El campo de está vacio, escribe una tarea!")
            }
        }

    return (
        <form onSubmit={onSubmit}>
            <DeleteIcon clickFuntion={()=>{setOpenModal(false)}}/>
            <input type="text" placeholder="Escribe la tarea" id="new__todo"/>
            <input type="submit" value="Agregar" />
        </form>
    ) 
}

export { FormCreateTodo};