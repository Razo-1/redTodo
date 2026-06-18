import axios from 'axios'
import { myData,PageTask } from '../store'

export const API = {
    getTodo(dispatch,page = 10){
        axios.get(`https://jsonplaceholder.typicode.com/todos?_start=${page}&_limit=10`)
        .then(res => dispatch(myData(res.data)))
    },
    pageTodo(dispatch){
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(res => dispatch(PageTask(res.data)))
    }
}