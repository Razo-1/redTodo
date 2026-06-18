import { useContext, useEffect, useState } from "react"
import { API } from "../../../api"
import { Context } from "../../../App/Contex/Contex"
import './PageNext.css'

function PageNext(){

    let [pagination,setPagination] = useState([])
    let [page,setPage] = useState(10)
    let {state,dispatch} = useContext(Context)

    useEffect(() => {
        API.getTodo(dispatch,page)
        console.log('he');
        
    },[page])

    
    useEffect(() => {
        API.pageTodo(dispatch)
        setPagination(Array.from( {length : Math.floor(state.fullTodo.length / 10) - 1}, (_,ind) => ind + 1))
    },[state.fullTodo.length])
    
    let nPag = (num) => setPage(num)

     return(
        <div className="pagination">
            {pagination.map(el => <button onClick={() => nPag(el)}  key={el}>{el}</button>)}
        </div>
     )
    
}

export { PageNext }