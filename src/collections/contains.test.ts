import injectContains from './contains'

describe('contains', () => {
  injectContains(Array.prototype)

  test('contains', () => {
    expect([1, 2, 3].contains(3))
  })

  test('contains negative', () => {
    expect(![1, 2, 3].contains(4))
  })

  test('containsAll', () => {
    expect([1, 2, 3].containsAll([1, 2]))
  })

  test('containsAll negative', () => {
    expect(![1, 2, 3].containsAll([1, 2, 3, 4]))
  })
})
