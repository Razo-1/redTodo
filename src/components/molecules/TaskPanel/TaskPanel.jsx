import { useContext } from 'react'
import { Context } from '../../../App/Contex/Contex'
import { globalState,reducer,taskText,tastElement } from '../../../store'
import './TaskPanel.css'

function TaskPanel(){

    let {state,dispatch} = useContext(Context)

    let addElem = (e) => {
        e.preventDefault()
        dispatch(tastElement())
    }
    
    return(
        <form className='panel' onSubmit={(e) => addElem(e)}>
            <input type="text" value={state.text} onChange={(e) => dispatch(taskText(e.target.value))}/>
            <button>add</button>
        </form>
    )
}

export { TaskPanel }