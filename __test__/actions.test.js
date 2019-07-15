import * as actions from '../redux/actions/index'
import * as types from '../redux/actions/actionsTypes'

describe('actions', () => {
    it('should create an action to add a personal todo item', () => {
        const text = 'Create Personal Test'
        const expectedAction = {
            type: types.ADD_PERSONAL,
            payload: {
                id: 0,
                title: text
            }
        }
        expect(actions.addPersonal(text)).toEqual(expectedAction)
    })
    it('should create an action to update a personal todo item', () => {
        const text = 'Update Personal Test'
        const id = 0
        const expectedAction = {
            type: types.UPDATE_PERSONAL,
            id: id,
            title: text
        }
        expect(actions.updatePersonal(id, text)).toEqual(expectedAction)
    })
    it('should create an action to increase personal item count', () => {
        const count = 1
        const expectedAction = {
            type: types.PERSONAL_COUNT,
            count: count
        }
        expect(actions.increasePersonalCount()).toEqual(expectedAction)
    })
    it('should create an action to delete a personal todo item', () => {
        const id = 0
        const expectedAction = {
            type: types.REMOVE_PERSONAL,
            id: 0
        }
        expect(actions.deletePersonal(id)).toEqual(expectedAction)
    })
})