import React from "react";
import { TodoContext } from "../TodoContext";

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
        <form onSubmit={onSubmit} 
            className='flex flex-col gap-4'
        >
            <textarea placeholder="Escribe la tarea" id="new__todo" 
                className="border p-2 w-[400px] max-w-[100%]"
            />
            <input type="submit" value="Agregar" 
                className='
                    cursor-pointer bg-orange-500 text-white font-medium p-1 px-4 rounded-lg shadow-md flex items-center gap-1
                    transition ease-in-out duration-100 
                    hover:bg-orange-600
                '
            />
        </form>
    ) 
}

export { FormCreateTodo};