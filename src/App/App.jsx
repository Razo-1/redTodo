import { Provaider } from "./Contex/Contex"
import { useReducer } from "react"
import { reducer,globalState } from "../store"
import { Block } from "../components"
import './App.css'

function App(){

    let [state,dispatch] = useReducer(reducer,globalState)    
    
    return(
        <Provaider value={{state,dispatch}}>
            <Block />
        </Provaider>
    )
}

export { App }