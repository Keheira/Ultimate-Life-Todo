import { ADD_PERSONAL, REMOVE_PERSONAL, UPDATE_PERSONAL, PERSONAL_COUNT } from '../actions/actionsTypes'
import initialState from '../defaultState'

export default function reducer(state = initialState.personal,action){
        switch(action.type){
            case ADD_PERSONAL:
                return {
                    ...state,
                    todo: [...state.todo, action.payload]
                }
            case REMOVE_PERSONAL:
                return {
                    ...state,
                    todo: state.todo.filter(item => item.id !== action.id)
                }
            case UPDATE_PERSONAL:
                return {
                    ...state,
                    todo: state.todo.map(item => {
                        if(item.id === action.id){
                            return {
                                ...item,
                                title: action.title
                            }
                        }
                        return item
                    })
                }
            case PERSONAL_COUNT:
                return {
                    ...state,
                    count: action.count
                }
            default:
                return state
        }
    }