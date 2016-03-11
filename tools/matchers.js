import './auto_mock_off'

import Immutable from 'immutable'

let matchers = {
  toEqualImmutable: () => (
    {
      compare: (actual, expected) => {
        let result = {
          pass: Immutable.is(actual, expected),
          message: `Expected ${actual ? actual.toString() : actual } to equal immutable ${expected ? expected.toString() : expected }`
        }

        return result
      }
    }
  )
}

jasmine.getEnv().beforeEach(() => {
  jasmine.addMatchers(matchers)
})
