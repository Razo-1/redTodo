import { FaTrashCan } from "react-icons/fa6";
import { delTask, isActive } from "../../../store";


function MyList({id,title,dispatch}){



    return(
        <>
        <input type="checkbox"/>
        <p onClick={() => dispatch(isActive(true,id))}>{title}</p>
        <div onClick={() => dispatch(delTask(id))}><FaTrashCan /></div>
        </>
    )
}

export { MyList }