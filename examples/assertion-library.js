const {multiplication, division} = require('../math')

let result, expected

result = multiplication(4, 2)
expected = 8
expect(result).toBe(expected)

result = division(4, 2)
expected = 2
expect(result).toBe(expected)

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}
