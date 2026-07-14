const { test, describe } = require('node:test')
const assert = require('node:assert')
const average = require('../utils/for_testing').average

describe('average', () => {
  test('of empty array is zero', () => {
    assert.strictEqual(average([]), 0)
  })

  test('of one value in the value itself', () => {
    assert.strictEqual(average([1]), 1)
  })

  test('of many is calcuated right', () => {
    assert.strictEqual(average([23, 45, 0, 44, 23, 78]), 35.5)
  })
})