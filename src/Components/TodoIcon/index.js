import { ReactComponent as CheckSVG} from "./check.svg"
import { ReactComponent as DeleteSVG} from "./delete.svg"

const iconsTypes = {
    "check": (color) => <CheckSVG className="icon" color={color}/>,
    "delete": (color) => <DeleteSVG className="icon" color={color}/>
}

function TodoIcon({ type, color, clickFuntion }){
    return (
        <span className={`item__icon item__icon--${type} cursor-pointer`} onClick={clickFuntion}>
            {iconsTypes[type](color)}
        </span>
    )
}

export { TodoIcon }