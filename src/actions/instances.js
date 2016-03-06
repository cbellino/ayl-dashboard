import Firebase from 'firebase'
import { fromJS } from 'immutable'

import actionTypes from '../constants/ActionTypes'
import FirebaseConstant from '../constants/Firebase'

const instancesRef = new Firebase(FirebaseConstant.BASE_URL).child('instances')

// TODO: Test this.
export const startListeningToInstances = () => {
  return (dispatch) => {

    // Set the instances when we get the value.
    instancesRef.on('child_added', (snapshot) => {
      dispatch(addInstance(recordFromSnapshot(snapshot)))
    })

    // Update the instance when it is changed.
    instancesRef.on('child_changed', (snapshot) => {
      dispatch(updateInstance(recordFromSnapshot(snapshot)))
    })
  }
}

export const addInstance = (instance) => {
  return {
    type: actionTypes.ADD_INSTANCE,
    instance: instance
  }
}

export const updateInstance = (instance) => {
  instance.set('updated_at', Firebase.ServerValue.TIMESTAMP)

  // TODO: Rollback the instance if the update fails
  // TODO: Test this part.
  instancesRef.update({ [instance.get('key')]: instance.toJS() })

  return {
    type: actionTypes.UPDATE_INSTANCE,
    instance: instance
  }
}

export const updateInstances = (instances) => {
  return {
    type: actionTypes.UPDATE_INSTANCES,
    instances: instances
  }
}

export const removeInstance = (instance) => (
  {
    type: actionTypes.REMOVE_INSTANCE,
    instance: instance
  }
)

const recordFromSnapshot = (snapshot) => {
  const record = snapshot.val()
  record.key = snapshot.key()

  return fromJS(record)
}
