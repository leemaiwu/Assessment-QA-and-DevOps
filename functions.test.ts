const {shuffleArray} = require('./utils')

describe('shuffleArray function should ', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(['']))).toBe(true)
    })
    
    test('return an array with the same number of inputs', () => {
        const array = [1, 2, 3, 4]
        const shuffleArrayTest = shuffleArray(array)
        expect(shuffleArrayTest).toHaveLength(array.length)
  })
})
