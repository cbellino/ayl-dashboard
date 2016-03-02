import '../../../tools/auto_mock_off'

import { fromJS } from 'immutable'
import actionTypes from '../../constants/ActionTypes'
import { setInstance, setInstances, setInstanceUpdatedAt } from '../instances'

const instance1 = { id: 'instance-1', name: 'instance 1' }
const instance2 = { id: 'instance-2', name: 'instance 2' }

describe('setInstance', () => {

  it('return an object with a `type` prop of SET_INSTANCE, and an `instance` prop of type Map', () => {
    const instance = { ...instance1, updated_at: 1456956439670 }
    const action = setInstance(instance.id, instance)

    expect(action.type).toEqual(actionTypes.SET_INSTANCE)
    expect(action.id).toEqual(instance.id)
    expect(action.instance).toEqualImmutable(fromJS(instance))
  })

})

describe('setInstances', () => {

  it('return an object with a `type` prop of SET_INSTANCES, and an `instances` prop of type List', () => {
    const instances = [ instance1, instance2 ]
    const action = setInstances(instances)

    expect(action.type).toEqual(actionTypes.SET_INSTANCES)
    expect(action.instances).toEqualImmutable(fromJS(instances))
  })

})

describe('setInstanceUpdatedAt', () => {

  it('set a new value if empty', () => {
    const instance = fromJS(instance1)

    expect(instance.get('updated_at')).toBeUndefined()

    const updatedInstance = setInstanceUpdatedAt(instance)

    expect(updatedInstance.get('updated_at')).toEqual(jasmine.any(Number))
  })

  it('set the given value', () => {
    const instance = fromJS(instance1)
    const timestamp = 1456957967507

    expect(instance.get('updated_at')).toBeUndefined()

    const updatedInstance = setInstanceUpdatedAt(instance, timestamp)

    expect(updatedInstance.get('updated_at')).toEqual(timestamp)
  })

})
