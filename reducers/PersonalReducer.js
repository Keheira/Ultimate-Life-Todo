import { ADD_PERSONAL, REMOVE_PERSONAL, GET_DATA } from '../actions/actionsTypes'

const INITIAL_STATE = {
    personal: [
        {
            id: 0,
            item: 'demo',
            count: 0
        }
    ],
    work: [],
    business: []
}

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_DATA:
            return state
        case ADD_PERSONAL:
            return {
                ...state,
                personal: action.payload
            }
        /*case REMOVE_PERSONAL:
            const index = parseInt(action.id)
            return state.filter(item => item.id !== index)*/
        default:
            return state
    }
}