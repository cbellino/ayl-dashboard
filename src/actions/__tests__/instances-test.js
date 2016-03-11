import '../../../tools/auto_mock_off'

import { fromJS } from 'immutable'
import actionTypes from '../../constants/ActionTypes'
import { updateInstance, updateInstances } from '../instances'

const instance1 = { key: 'instance-1', name: 'instance 1' }
const instance2 = { key: 'instance-2', name: 'instance 2' }

describe('updateInstance', () => {

  it('return an object with a `type` prop of UPDATE_INSTANCE, and an `instance` prop of type Map', () => {
    const baseTime = new Date()
    jasmine.clock().mockDate(baseTime)

    const instance = fromJS({ ...instance1, updated_at: baseTime })
    const action = updateInstance(instance)

    expect(action.type).toEqual(actionTypes.UPDATE_INSTANCE)
    expect(action.instance).toEqualImmutable(instance)
  })

})

describe('updateInstances', () => {

  it('return an object with a `type` prop of UPDATE_INSTANCES, and an `instances` prop of type List', () => {
    const instances = fromJS([ instance1, instance2 ])
    const action = updateInstances(instances)

    expect(action.type).toEqual(actionTypes.UPDATE_INSTANCES)
    expect(action.instances).toEqualImmutable(instances)
  })

})
