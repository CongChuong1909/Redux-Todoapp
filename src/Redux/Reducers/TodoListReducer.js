import {createSlice} from '@reduxjs/toolkit'
const todoSlice = createSlice({
    name: "todoList",
    initialState:[
        { id : 1, name: 'learn english', completed: true, priority: 'Medium' },
        { id : 2, name: 'learn Redux', completed: false, priority: 'High' },
        { id : 3, name: 'learn JS', completed: true, priority: 'Low' },
],
    reducers:{
        addTodo: (state,action)=>{
            state.push(action.payload);
        },
        toogleTodoStatus: (state,action)=>{
            const currentTodo = state.filter(todo =>todo.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
        },
    }
});
export default todoSlice;