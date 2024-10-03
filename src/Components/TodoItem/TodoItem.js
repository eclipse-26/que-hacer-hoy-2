import React from 'react';
import "./TodoItem.css";
import { CompleteIcon } from "../TodoIcon/CompleteIcon"
import { DeleteIcon } from "../TodoIcon/DeleteIcon"

function TodoItem(props){


    return(
      <li className={`list__item ${props.completed && "list__item--completed"}`}>
        <CompleteIcon 
          completed={props.completed}
          clickFuntion={props.onComplete}
        />
        <p> {props.text} <span>{props.completed}</span></p>
        <DeleteIcon 
          completed={props.completed}
          clickFuntion={props.onDelete}
        />
      </li>
    );
  }

  export { TodoItem };