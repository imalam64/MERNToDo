import axios from 'axios';
import {GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO, TODO_LOADING} from './types';

export const getToDos = () => dispatch => {
    dispatch(setToDoLoading());
    axios
    .get('/api/toDo')
    .then(res => 
        dispatch({
            type:GET_TODOS,
            payload: res.data
        })
    )
};

export const addToDo = toDo => dispatch => {
    axios
    .post('/api/toDo', toDo)
    .then(res => 
        dispatch({
            type: ADD_TODO,
            payload: res.data
        })
    )
};

export const deleteToDo = id => dispatch => {
    axios
    .delete(`/api/toDo/${id}`)
    .then(res =>
     dispatch({
         type: DELETE_TODO,
         payload: id
     })   
    )
}

export const updateToDo = id => dispatch => {
    axios
    .put(`/api/toDo/${id}`)
    .then(res =>
    dispatch({
        type: UPDATE_TODO,
        payload: id
    })
    )
}



export const setToDoLoading = () => {
    return{
        type: TODO_LOADING
    };
};