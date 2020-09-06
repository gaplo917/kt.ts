import injectDistinct from './distinct'

describe('distinct', () => {
  injectDistinct(Array.prototype)
  const users = [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Peter' },
  ]

  test('distinct', () => {
    expect([1, 1, 2, 2, 3].ktDistinct()).toStrictEqual([1, 2, 3])
  })

  test('distinctBy', () => {
    expect(users.ktDistinctBy(value => value.name)).toStrictEqual([
      {
        id: 1,
        name: 'Peter',
      },
      {
        id: 2,
        name: 'Mary',
      },
    ])

    expect(users.ktDistinctBy(value => value.id)).toStrictEqual(users)
  })
})
