import { TaskPanel,TodoContent,PageNext } from '../..'
import './Block.css'


function Block(){


    return(
        <div className='block'>
            <TaskPanel/>
            <TodoContent />
            <PageNext/>
        </div>
    )
}

export { Block }