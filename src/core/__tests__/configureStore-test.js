import configureStore from '../configureStore'
import * as reducers from '../../reducers'

describe('configureStore', () => {

  it('exists', () => {
    const store = configureStore()

    expect(store).toBeDefined()
  })

  it('contains instancesReducer', () => {
    expect(reducers.instances).toBeDefined()
  })

})
