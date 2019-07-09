import { ADD_BUSINESS, REMOVE_BUSINESS } from '../actions/actionsTypes'
import initialState from '../defaultState'

export default function reducer(state = initialState.business,action){
        switch(action.type){
            case ADD_BUSINESS:
                return {
                    ...state,
                    todo: [...state.todo, action.payload]
                }
            case REMOVE_BUSINESS:
                return {todo: state.todo.filter(item => item.id !== action.id)}
            default:
                return state
        }
    }