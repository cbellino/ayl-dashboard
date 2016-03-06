import { List, Map } from 'immutable'
import actionTypes from '../constants/ActionTypes'

const INITIAL_STATE = List()

const instancesReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_INSTANCE:
      return addInstance(state, action.instance)
    case actionTypes.REMOVE_INSTANCE:
      return removeInstance(state, action.instance)
    case actionTypes.UPDATE_INSTANCE:
      return updateInstance(state, action.instance)
    case actionTypes.UPDATE_INSTANCES:
      return setInstances(state, action.instances)
  }

  return state
}

export const addInstance = (state = List(), instance) => {
  return state.push(Map(instance))
}

export const removeInstance = (state = List(), instance) => {
  return state.filter(current => current.get('key') !== instance.get('key'))
}

export const updateInstance = (state = List(), instance) => {
  instance = Map(instance)

  return state.update(
    state.findIndex(current => current.get('key') === instance.get('key')),
    () => instance
  )
}

export const setInstances = (state = List(), instances) => {
  return state.clear().merge(instances)
}

export default instancesReducer
