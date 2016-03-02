import Firebase from 'firebase'
import { fromJS } from 'immutable'

import actionTypes from '../constants/ActionTypes'
import FirebaseConstant from '../constants/Firebase'

const instancesRef = new Firebase(FirebaseConstant.BASE_URL).child('instances')

// TODO: Test this method.
export const startListeningToInstances = () => {
  return (dispatch) => {

    // Set the instances when we get the value.
    instancesRef.on('value', (snapshot) => {
      const value = snapshot.val()
      const instances = Object.keys(value).map(key => ({ ...value[key], id: key }))

      dispatch(setInstances(instances))
    })

    // Update the instance when it is changed.
    instancesRef.on('child_changed', (snapshot) => {
      const instance = snapshot.val()

      dispatch(setInstance(instance.id, instance))
    })
  }
}

// TODO: Remove the id field.
// TODO: Rollback the instance if the update doesn't work in firebase.
export const setInstance = (id, instance) => {
  instance = fromJS(instance)
  instance = setInstanceUpdatedAt(instance, instance.get('updated_at'))

  // TODO: Test this part.
  instancesRef.update({ [id]: instance.toJS() })

  return {
    type: actionTypes.SET_INSTANCE,
    id: id,
    instance: instance
  }
}

export const setInstances = (instances) => (
  {
    type: actionTypes.SET_INSTANCES,
    instances: fromJS(instances)
  }
)

export const setInstanceUpdatedAt = (instance, updatedAt = getTimestamp()) => {
  return instance.set('updated_at', updatedAt)
}

const getTimestamp = () => new Date().getTime()
