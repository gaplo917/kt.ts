import injectElementAt from './elementAt'

describe('elementAt', () => {
  injectElementAt(Array.prototype)

  test('elementAt', () => {
    const arr = [1, 2, 3]

    expect(arr.ktElementAt(0)).toBe(1)
    expect(arr.ktElementAt(1)).toBe(2)
    expect(arr.ktElementAt(2)).toBe(3)
    expect(() => arr.ktElementAt(3)).toThrow(new Error('IndexOutOfBoundError'))
  })

  test('elementAt if empty error', () => {
    expect(() => [].ktElementAt(0)).toThrow(new Error('IndexOutOfBoundError'))
  })

  test('elementAtOrElse', () => {
    const arr = [1, 2, 3]

    expect(arr.ktElementAtOrElse(0, () => 100)).toBe(1)
    expect(arr.ktElementAtOrElse(4, () => 100)).toBe(100)
  })

  test('elementAtOrElse if empty', () => {
    expect((<number[]>[]).ktElementAtOrElse(0, () => 1)).toBe(1)
    expect((<number[]>[]).ktElementAtOrElse(1000, () => -100)).toBe(-100)
  })

  test('elementAtOrNull', () => {
    const arr = [1, 2, 3]

    expect(arr.ktElementAtOrNull(0)).toBe(1)
    expect(arr.ktElementAtOrNull(4)).toBeNull()
  })

  test('elementAtOrNull if empty', () => {
    expect((<number[]>[]).ktElementAtOrNull(0)).toBeNull()
    expect((<number[]>[]).ktElementAtOrNull(1000)).toBeNull()
  })
})
