import { ADD_PERSONAL, REMOVE_PERSONAL } from './actionsTypes'

let id = 0

export const addPersonal = text => ({
    type: ADD_PERSONAL,
    id: id++,
    payload: { id: id, title: text, completed: false}
})

export const deletePersonal = (id) => ({
    type: REMOVE_PERSONAL,
    id: id
})