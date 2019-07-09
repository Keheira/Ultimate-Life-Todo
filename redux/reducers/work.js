import { ADD_WORK, REMOVE_WORK, UPDATE_COUNT } from '../actions/actionsTypes'
import initialState from '../defaultState'

export default function reducer(state = initialState.work, action){
    switch(action.type){
        case ADD_WORK:
            return {
                ...state,
                todo: [...state.todo, action.payload]
            }
        case REMOVE_WORK:
            return {todo: state.todo.filter(item => item.id !== action.id)}
        default:
            return state
    }
}