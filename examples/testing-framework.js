const {multiplication, division} = require('../math')

test('multiplication of numbers', () => {
  const result = multiplication(4, 2)
  const expected = 8
  expect(result).toBe(expected)
})

test('division of numbers', () => {
  const result = division(4, 2)
  const expected = 2
  expect(result).toBe(expected)
})

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}
