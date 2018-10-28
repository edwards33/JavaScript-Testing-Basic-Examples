const {multiplication, division} = require('../math')

let result, expected

result = multiplication(4, 2)
expected = 8
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}

result = division(4, 2)
expected = 2
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}
