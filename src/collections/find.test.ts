import injectFind from './find'

describe('findLast', () => {
  injectFind(Array.prototype)

  test('findLast', () => {
    expect(
      [
        { id: 1, name: 'Peter' },
        { id: 2, name: 'Mary' },
        { id: 3, name: 'Peter' },
      ].findLast(value => value.name === 'Peter'),
    ).toStrictEqual({
      id: 3,
      name: 'Peter',
    })
  })
})
