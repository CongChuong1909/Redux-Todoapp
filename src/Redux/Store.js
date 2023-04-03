// import rootReducer from './Reducer';
// import {createStore} from 'redux';
// const store = createStore(rootReducer);
// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./Reducers/FilterReducer";
import todoSlice from "./Reducers/TodoListReducer";
const store = configureStore({
    reducer:{
        filter: filterSlice.reducer,
        todoList: todoSlice.reducer,
    }
})
export default store;