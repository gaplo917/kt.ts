import inject from './size'

describe('size', () => {
  inject(Array.prototype)

  test('size', () => {
    const arr = [1, 2, 3]
    expect(arr.size).toBe(3)
    arr.pop()
    expect(arr.size).toBe(2)
    arr.pop()
    expect(arr.size).toBe(1)
    arr.push(1)
    expect(arr.size).toBe(2)
  })
})
