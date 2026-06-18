import { changText, closeWindow, taskText,} from "../../../store";

function ChangText({state,dispatch}){

    let editTitle = (e) => {
        e.preventDefault()
        dispatch(closeWindow(false))
    }

    return(
        <div onClick={(e) => dispatch(closeWindow(e.target.className === 'edit' ? '' : true))} className={`${state.on ? 'edit' : ''}`} >
            <div className={`${state.on ? 'changTitle' : 'off'}`}>
                <h1>Edit Text</h1>
                <form onSubmit={(e) => editTitle(e)}>
                    <input value={state.text} onChange={(e) => dispatch(taskText(e.target.value))} type="text" />
                    <button onClick={() => dispatch(state.text.trim() ?  changText() : '')}>EDIT</button>
                </form>
            </div>
        </div>
    )
}

export { ChangText }