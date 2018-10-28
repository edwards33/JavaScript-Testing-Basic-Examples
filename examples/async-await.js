const {multiplicationAsync, divisionAsync} = require('../math')

test('multiplicationAsync is performed asynchronously', async () => {
  const result = await multiplicationAsync(4, 2)
  const expected = 8
  expect(result).toBe(expected)
})

test('divisionAsync is performed asynchronously', async () => {
  const result = await divisionAsync(4, 2)
  const expected = 2
  expect(result).toBe(expected)
})

async function test(title, callback) {
  try {
    await callback()
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
