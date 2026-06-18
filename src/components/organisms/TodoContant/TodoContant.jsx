import { useEffect,useContext } from "react"
import { API } from "../../../api"
import { Context } from "../../../App/Contex/Contex"
import { MyList,ChangText } from "../../molecules";
import './TodoContant.css'



function TodoContent(){

    let {state,dispatch} = useContext(Context)
    
    useEffect(() => {
        API.getTodo(dispatch)
    },[])
    
    return(
        <div className="list">
            {state.todo.map(el => <div className="todo" key={el.id}><MyList id={el.id} title={el.title} dispatch={dispatch}/></div>)}
            {state.serverTodo.map(el => <div className="todo" key={el.id}><MyList id={el.id} title={el.title} dispatch={dispatch}/></div>)}
            <ChangText state={state} dispatch={dispatch}/>
        </div>
    )
}

export { TodoContent }  

