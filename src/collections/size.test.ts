import inject from './size'

describe('size', () => {
  inject(Array.prototype)

  test('size', () => {
    const arr = [1, 2, 3]
    expect(arr.ktSize).toBe(3)
    arr.pop()
    expect(arr.ktSize).toBe(2)
    arr.pop()
    expect(arr.ktSize).toBe(1)
    arr.push(1)
    expect(arr.ktSize).toBe(2)
  })
})
