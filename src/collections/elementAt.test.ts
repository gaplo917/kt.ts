import injectElementAt from './elementAt'

describe('elementAt', () => {
  injectElementAt(Array.prototype)

  test('elementAt', () => {
    const arr = [1, 2, 3]

    expect(arr.elementAt(0)).toBe(1)
    expect(arr.elementAt(1)).toBe(2)
    expect(arr.elementAt(2)).toBe(3)
    expect(() => arr.elementAt(3)).toThrow(new Error('IndexOutOfBoundError'))
  })

  test('elementAt if empty error', () => {
    expect(() => [].elementAt(0)).toThrow(new Error('IndexOutOfBoundError'))
  })

  test('elementAtOrElse', () => {
    const arr = [1, 2, 3]

    expect(arr.elementAtOrElse(0, () => 100)).toBe(1)
    expect(arr.elementAtOrElse(4, () => 100)).toBe(100)
  })

  test('elementAtOrElse if empty', () => {
    expect((<number[]>[]).elementAtOrElse(0, () => 1)).toBe(1)
    expect((<number[]>[]).elementAtOrElse(1000, () => -100)).toBe(-100)
  })

  test('elementAtOrNull', () => {
    const arr = [1, 2, 3]

    expect(arr.elementAtOrNull(0)).toBe(1)
    expect(arr.elementAtOrNull(4)).toBe(null)
  })

  test('elementAtOrNull if empty', () => {
    expect((<number[]>[]).elementAtOrNull(0)).toBe(null)
    expect((<number[]>[]).elementAtOrNull(1000)).toBe(null)
  })
})
