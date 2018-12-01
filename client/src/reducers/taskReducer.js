import {GET_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO, TODO_LOADING} from '../actions/types';

const initialState = {
    toDo: [],
    loading: false
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_TODOS:
            return {
                ...state,
                toDo: action.payload,
                loading: false
            };
        case DELETE_TODO:
            return {
                ...state,
                toDo: state.toDo.filter( toDo => toDo._id !== action.payload)
            };
        case ADD_TODO:
            return {
                ...state,
                toDo: [action.payload, ...state.toDo]
            };
        case TODO_LOADING:
            return{
                ...state,
                loading: true
            }
        default:
            return state;
    }
}