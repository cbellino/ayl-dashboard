import { List } from 'immutable'
import actionTypes from '../constants/ActionTypes'

const INITIAL_STATE = List()

const instancesReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case actionTypes.ADD_INSTANCE:
      return addInstance(state, action.instance)
    case actionTypes.REMOVE_INSTANCE:
      return removeInstance(state, action.id)
    case actionTypes.SET_INSTANCE:
      return setInstance(state, action.id, action.instance)
    case actionTypes.SET_INSTANCES:
      return setInstances(state, action.instances)
  }

  return state
}

export const addInstance = (state = List(), instance) => {
  return state.push(instance)
}

export const removeInstance = (state = List(), id) => {
  return state.filter(instance => instance.get('id') !== id)
}

export const setInstance = (state = List(), id, instance) => {
  return state.update(
    state.findIndex(item => item.get('id') === id),
    () => instance
  )
}

export const setInstances = (state = List(), instances) => {
  return state.clear().merge(instances)
}

export default instancesReducer
