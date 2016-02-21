import { fromJS } from 'immutable'
import actionTypes from '../../constants/ActionTypes'
import instancesReducer from '../instances'

const instance1 = fromJS({ id: 'instance-1', name: 'instance 1' })
const instance2 = fromJS({ id: 'instance-2', name: 'instance 2' })

describe('instancesReducer', () => {

  it('set the initial state', () => {
    const state = instancesReducer(undefined, undefined)

    expect(state).toEqualImmutable(fromJS([ ]))
  })

  it('handle ADD_INSTANCE', () => {
    const action = {
      type: actionTypes.ADD_INSTANCE,
      instance: instance1
    }
    const state = instancesReducer(undefined, action)

    expect(state).toEqualImmutable(fromJS([ instance1 ]))
  })

  it('handle REMOVE_INSTANCE', () => {
    const action = {
      type: actionTypes.REMOVE_INSTANCE,
      id: instance1.get('id')
    }
    const initialSate = fromJS([ instance1, instance2 ])
    const state = instancesReducer(initialSate, action)

    expect(state).toEqualImmutable(fromJS([ instance2 ]))
  })

  it('handle SET_INSTANCE', () => {
    const newInstance = fromJS({ id: 'instance-3', name: 'instance 3' })
    const action = {
      type: actionTypes.SET_INSTANCE,
      id: 'instance-1',
      instance: newInstance
    }
    const initialSate = fromJS([ instance1 ])
    const state = instancesReducer(initialSate, action)

    expect(state).toEqualImmutable(fromJS([ newInstance ]))
  })

  it('handle SET_INSTANCES', () => {
    const action = {
      type: actionTypes.SET_INSTANCES,
      instances: [ instance1, instance2 ]
    }
    const state = instancesReducer(undefined, action)

    expect(state).toEqualImmutable(fromJS([ instance1, instance2 ]))
  })

})

