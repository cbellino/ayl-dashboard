import Firebase from 'firebase'
import { fromJS } from 'immutable'

import actionTypes from '../constants/ActionTypes'
import FirebaseConstant from '../constants/firebase'

const instancesRef = new Firebase(FirebaseConstant.BASE_URL).child('instances')

export const startListeningToInstances = () => {
  return (dispatch) => {
    instancesRef.on('value', (snapshot) => {
      const value = snapshot.val()
      const instances = Object.keys(value).map(key => ({ ...value[key], id: key }))

      dispatch(setInstances(instances))
    })
  }
}

export const setInstances = (instances) => (
  {
    type: actionTypes.SET_INSTANCES,
    instances: fromJS(instances)
  }
)

// TODO: Remove the id field.
export const setInstance = (id, instance) => {

  let date = new Date().getTime() / 1000
  instance = instance.set('updated_at', date)

  // TODO: Rollback the instance if the update doesn't work in firebase.
  instancesRef.update({ [id]: instance.toJS() })

  return {
    type: actionTypes.SET_INSTANCE,
    id: id,
    instance: fromJS(instance)
  }
}
