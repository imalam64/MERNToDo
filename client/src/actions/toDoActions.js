import {GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO} from './types';

export const getToDos = () => {
    return{
        type: GET_TODOS
    };
};

export const deleteToDo = (id) => {
    return{
        type: DELETE_TODO,
        payload: id
    };
};

export const addToDo = toDo => {
    return{
        type: ADD_TODO,
        payload: toDo
    };
};