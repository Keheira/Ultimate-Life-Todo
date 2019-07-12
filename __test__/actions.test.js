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
})