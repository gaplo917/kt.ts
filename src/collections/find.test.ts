import injectFind from './find'

describe('findLast', () => {
  injectFind(Array.prototype)
  const users = [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Peter' },
  ]
  test('findLast', () => {
    expect(users.ktFindLast(value => value.name === 'Peter')).toStrictEqual({
      id: 3,
      name: 'Peter',
    })
    expect(users.ktFindLast(value => value.name === 'Tony')).toBeNull()
  })
})
