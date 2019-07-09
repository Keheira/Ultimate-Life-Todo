import {
    ADD_PERSONAL, REMOVE_PERSONAL, UPDATE_PERSONAL, PERSONAL_COUNT,
    ADD_WORK, REMOVE_WORK, UPDATE_WORK, WORK_COUNT,
    ADD_BUSINESS, REMOVE_BUSINESS, UPDATE_BUSINESS, BUSINESS_COUNT } from './actionsTypes'

let id = 0
let personalCount = 0
let workCount = 1
let businessCount = 0

/* Personal Actions */
export const addPersonal = item => ({
    type: ADD_PERSONAL,
    payload: {
        id: id++,
        title: item,
    }
})

export const deletePersonal = id => ({
    type: REMOVE_PERSONAL,
    id: id,
})

/*export const updatePersonal = (id, item) => ({
    type: UPDATE_PERSONAL,
    id: id,
    title: item
})

export const increasePersonalCount = () => ({
    type: PERSONAL_COUNT,
    count: personalCount++
})*/

/* Work Actions */

export const addWork = item => ({
    type: ADD_WORK,
    payload: {
        id: id++,
        title: item,
    }
})

export const deleteWork = id => ({
    type: REMOVE_WORK,
    id: id,
})

/*export const updateWorkCount = () => ({
    type: UPDATE_WORK,
    count: workCount++
})*/

/* Business Actions */

export const addBusiness = item => ({
    type: ADD_BUSINESS,
    payload: {
        id: id++,
        title: item,
    }
})

export const deleteBusiness = id => ({
    type: REMOVE_BUSINESS,
    id: id
})

/*export const updateBusinessCount = () => ({
    type: UPDATE_BUSINESS,
    count: businessCount++
})*/