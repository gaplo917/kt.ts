import injectDistinct from './distinct'

describe('distinct', () => {
  injectDistinct(Array.prototype)

  test('distinct', () => {
    expect([1, 1, 2, 2, 3].distinct()).toStrictEqual([1, 2, 3])
  })
})
