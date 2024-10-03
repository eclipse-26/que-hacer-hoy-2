import React from "react";
import { TodoIcon } from "."

function CompleteIcon ({completed, clickFuntion}) {
    return (
        <TodoIcon 
            type="check"
            color={completed ? "gray" : "black"}
            clickFuntion={clickFuntion}
        />
    )
}

export { CompleteIcon }