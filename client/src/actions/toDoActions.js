import {GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO} from './types';

export const getToDos = () => {
    return{
        type: GET_TODOS
    };
};