import { GET_DATA, ADD_PERSONAL, REMOVE_PERSONAL } from './actionsTypes'

let id = 0
let count = 0

export const getData = () => ({
    type: GET_DATA
})

export const addPersonal = item => ({
    type: ADD_PERSONAL,
    id: id++,
    payload: { id: id, title: item, count: count}
})

export const deletePersonal = (id) => ({
    type: REMOVE_PERSONAL,
    id: id,
    count: count++
})