import React from 'react';
import { IoMdCheckmark, IoMdTrash } from 'react-icons/io';

function TodoItem(props){
    return(
      <li 
      className={
        `${props.completed && "bg-lime-400 text-gray-600 line-through"} 
        flex gap-4 items-center justify-between w-full p-2 border shadow-sm rounded-lg
        transition ease-in-out duration-100 
        ${!props.completed && "hover:bg-gray-100" }
        `}>
        <p className="flex items-center gap-2">
        <IoMdCheckmark onClick={props.onComplete} 
          className={`
            cursor-pointer min-w-fit transition ease-in-out duration-50
            ${!props.completed && "hover:text-lime-600"}
          `}/> 
          {props.text}
        </p>
        <IoMdTrash onClick={props.onDelete} 
        className={`
          cursor-pointer min-w-fit transition ease-in-out duration-50
          ${!props.completed && "hover:text-red-600"}
        `}/> 
      </li>
    );
  }

  export { TodoItem };