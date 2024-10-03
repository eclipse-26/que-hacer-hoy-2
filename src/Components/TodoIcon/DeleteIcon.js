import React from "react";
import { TodoIcon } from "."

function DeleteIcon ({completed, clickFuntion}) {
    return (
        <TodoIcon 
            type="delete"
            color={completed ? "gray" : "black"}
            clickFuntion={clickFuntion}
        />
    )
}

export { DeleteIcon }