import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filter.search;
export const filterStatusSelector = (state) => state.filter.status;
export const filterPrioritySelector = (state) => state.filter.priority;


export const todoRemainingSelector = createSelector(
    todoListSelector,
    filterStatusSelector,
    searchTextSelector,
    filterPrioritySelector,
    (todoList, status, searchText, priority) => {
        console.log(priority);
        return todoList.filter((todo) => {
            if (status === "All") {
                console.log(priority);
                if (priority.length === 0) {
                    return todo.name.includes(searchText);
                } else {
                    return (
                        todo.name.includes(searchText) &&
                        priority.includes(todo.priority)
                    );
                }
            } else {
                if (priority.length === 0) {
                    console.log(priority);
                    return (
                        todo.name.includes(searchText) &&
                        (status === "Completed"
                            ? todo.completed
                            : !todo.completed)
                    );
                } else {
                    console.log(1);
                    return (
                        todo.name.includes(searchText) &&
                        (status === "Completed"
                            ? todo.completed
                            : !todo.completed) &&
                        priority.includes(todo.priority)
                    );
                }
            }
        });
    },
);
