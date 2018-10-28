// multiplication has been broken. Errors appears in the tests
const multiplication = (a, b) => a / b
const division = (a, b) => a / b

// To simulate an async function
const multiplicationAsync = (...args) => Promise.resolve(multiplication(...args))
const divisionAsync = (...args) => Promise.resolve(division(...args))

module.exports = {multiplication, division, multiplicationAsync, divisionAsync}
