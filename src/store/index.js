const PART_TEXT = 'partText'
const ADD_ELEMENT = 'addElement'
const MY_ELEM = 'data'
const PAGE = 'page'
const DEL_ELM = 'delElm'
const IS_ACTIVE = 'isActive'
const CLOSE_WINDOW = 'closeWindow'
const EDIT = 'edit'
const CHANGE_TEXT = 'changText'


export let globalState = {
    text : '',
    todo : [],
    serverTodo : [],
    fullTodo : [],
    on : false,
    newTextId :  null
}

export let reducer = (state,action) => {
    switch(action.type){
        case PART_TEXT : 
        return {
            ...state,
            text : action.payload
        }
        case ADD_ELEMENT : 
        return {
            ...state,
            todo : state.text.trim() ? [...state.todo,{ id : Date.now(), title : state.text }] : [...state.todo],
            text : ''
        }
        case MY_ELEM : 
        return {
            ...state,
            serverTodo : action.payload
        }
        case PAGE : 
        return {
            ...state,
            fullTodo : action.payload
        }
        case DEL_ELM : 
        return {
            ...state,
            todo : state.todo.filter(el => el.id !== action.payload),
            serverTodo : state.serverTodo.filter(el => el.id !== action.payload)
        }
        case IS_ACTIVE : 
        return {
            ...state,
            on : action.payload,
            newTextId : action.id
        }
        case CLOSE_WINDOW : 
        return {
            ...state,
            on : action.payload
        }
        case EDIT : 
        return {
            ...state,
            on : action.payload
        }
        case CHANGE_TEXT : 
        return {
            ...state,
            todo : ElemenetSearch(state.todo,state.newTextId,state.text),
            serverTodo : ElemenetSearch(state.serverTodo,state.newTextId,state.text),
            text : ''
        }
        default : 
            return state
    }
}

export let taskText = (text) => ({ type : PART_TEXT , payload : text })
export let tastElement = () => ({type : ADD_ELEMENT})
export let myData = (data) => ({ type : MY_ELEM, payload : data })
export let PageTask = (data) => ({type : PAGE , payload : data})
export let delTask = (id) => ({type : DEL_ELM , payload : id})
export let isActive = (check,id) => ({type : IS_ACTIVE, payload : check, id : id})
export let closeWindow = (check) => ({type : CLOSE_WINDOW, payload : check})
export let editTask = (id) => ({type : EDIT, payload : id})
export let changText = (id) => ({type : CHANGE_TEXT })


function ElemenetSearch(arr,id,text){
    for(let i = 0 ;i < arr.length;i++){
        if(arr[i].id === id){
            arr[i].title = text
        }
    }
    return arr
}