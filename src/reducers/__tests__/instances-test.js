import { fromJS } from 'immutable'
import actionTypes from '../../constants/ActionTypes'
import instancesReducer from '../instances'

const instance1 = fromJS({ key: 'instance-1', name: 'instance 1' })
const instance2 = fromJS({ key: 'instance-2', name: 'instance 2' })
const instance3 = fromJS({ key: 'instance-3', name: 'instance 3' })

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
      instance: instance1
    }
    const initialSate = fromJS([ instance1, instance2 ])
    const state = instancesReducer(initialSate, action)

    expect(state).toEqualImmutable(fromJS([ instance2 ]))
  })

  it('handle UPDATE_INSTANCE', () => {
    const newInstance = instance3
    const action = {
      type: actionTypes.UPDATE_INSTANCE,
      instance: newInstance
    }
    const initialSate = fromJS([ instance1 ])
    const state = instancesReducer(initialSate, action)

    expect(state).toEqualImmutable(fromJS([ newInstance ]))
  })

  it('handle UPDATE_INSTANCES', () => {
    const action = {
      type: actionTypes.UPDATE_INSTANCES,
      instances: [ instance1, instance2 ]
    }
    const state = instancesReducer(undefined, action)

    expect(state).toEqualImmutable(fromJS([ instance1, instance2 ]))
  })

})

