import { ADD_PERSONAL, REMOVE_PERSONAL } from '../actions/actionsTypes'

const INITIAL_STATE = {
    personal: [],
    work: [],
    business: []
}

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case ADD_PERSONAL:
            return {
                ...state,
                personal: [...state.personal, action.payload]
            }
        case REMOVE_PERSONAL:
            const index = parseInt(action.id)
            return state.filter(item => item.id !== index)
        default:
            return state
    }
}