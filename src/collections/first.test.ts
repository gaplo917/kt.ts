import injectFirst from './first'

describe('first', () => {
  injectFirst(Array.prototype)
  const users = [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Peter' },
  ]

  test('first', () => {
    expect([1, 1, 2, 2, 3].first()).toBe(1)
    expect(['100', 2].first()).toBe('100')
    expect(() => [].first()).toThrow(new Error('NoSuchElementError'))
  })

  test('first in empty array', () => {
    expect(() => [].first()).toThrow(new Error('NoSuchElementError'))
  })

  test('first with predicate', () => {
    expect(users.first()).toStrictEqual({
      id: 1,
      name: 'Peter',
    })

    expect(users.first(value => value.name === 'Mary')).toStrictEqual({
      id: 2,
      name: 'Mary',
    })
  })

  test('firstOrNull with predicate not found', () => {
    expect(() => users.first(value => value.name === 'Tony')).toThrow(
      new Error('NoSuchElementError'),
    )
  })

  test('firstOrNull', () => {
    expect([1, 1, 2, 2, 3].first()).toBe(1)
    expect(['100', 2].first()).toBe('100')
    expect([].firstOrNull()).toBe(null)
  })

  test('firstOrNull in empty array', () => {
    expect([].firstOrNull()).toBe(null)
  })

  test('firstOrNull with predicate', () => {
    expect(users.firstOrNull()).toStrictEqual({
      id: 1,
      name: 'Peter',
    })

    expect(users.firstOrNull(value => value.name === 'Mary')).toStrictEqual({
      id: 2,
      name: 'Mary',
    })
  })

  test('firstOrNull with predicate not found', () => {
    expect(users.firstOrNull(value => value.name === 'Tony')).toBe(null)
  })
})
