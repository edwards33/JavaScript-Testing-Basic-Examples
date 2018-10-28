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
