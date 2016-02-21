import './auto_mock_off'

import Immutable from 'immutable'

let matchers = {

  toBeImmutable: function () {
    const { actual } = this
    return Immutable.Iterable.isIterable(actual)
  },

  toEqualImmutable: function (expected) {
    const { actual } = this

    this.message = () => {
      return `Expected ${actual ? actual.toString() : actual } to equal immutable ${expected ? expected.toString() : expected }`
    }

    return Immutable.is(actual, expected)
  }
}

jasmine.getEnv().beforeEach(function () {
  this.addMatchers(matchers)
})
