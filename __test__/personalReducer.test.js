import reducer from '../redux/reducers/personal'
import * as types from '../redux/actions/actionsTypes'

describe('add personal todo reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            todo: [],
           count: 0
        })
    })

    it('should handle ADD_PERSONAL', () => {
        const beforeState = {todo:[], count: 0}
        const action = {
            type: types.ADD_PERSONAL,
            payload:{
                title: 'Run the reducer!',
                id: 0
            }
        }
        expect(
            reducer(beforeState, action)
        ).toEqual({
            todo:[
                {
                    id: 0,
                    title: 'Run the reducer!' 
                }
            ],
            count: 0
        })
    })
})