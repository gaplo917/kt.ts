import injectFirst from './first'

describe('first', () => {
  injectFirst(Array.prototype)
  const users = [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Peter' },
  ]

  test('first', () => {
    expect([1, 1, 2, 2, 3].ktFirst()).toBe(1)
    expect(['100', 2].ktFirst()).toBe('100')
    expect(() => [].ktFirst()).toThrow(new Error('NoSuchElementError'))
  })

  test('first in empty array', () => {
    expect(() => [].ktFirst()).toThrow(new Error('NoSuchElementError'))
  })

  test('first with predicate', () => {
    expect(users.ktFirst()).toStrictEqual({
      id: 1,
      name: 'Peter',
    })

    expect(users.ktFirst(value => value.name === 'Mary')).toStrictEqual({
      id: 2,
      name: 'Mary',
    })
  })

  test('firstOrNull with predicate not found', () => {
    expect(() => users.ktFirst(value => value.name === 'Tony')).toThrow(
      new Error('NoSuchElementError'),
    )
  })

  test('firstOrNull', () => {
    expect([1, 1, 2, 2, 3].ktFirst()).toBe(1)
    expect(['100', 2].ktFirst()).toBe('100')
    expect([].ktFirstOrNull()).toBeNull()
  })

  test('firstOrNull in empty array', () => {
    expect([].ktFirstOrNull()).toBeNull()
  })

  test('firstOrNull with predicate', () => {
    expect(users.ktFirstOrNull()).toStrictEqual({
      id: 1,
      name: 'Peter',
    })

    expect(users.ktFirstOrNull(value => value.name === 'Mary')).toStrictEqual({
      id: 2,
      name: 'Mary',
    })
  })

  test('firstOrNull with predicate not found', () => {
    expect(users.ktFirstOrNull(value => value.name === 'Tony')).toBeNull()
  })
})
