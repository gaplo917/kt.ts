import injectContains from './contains'

describe('contains', () => {
  injectContains(Array.prototype)
  const users = [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Peter' },
  ]

  test('contains number', () => {
    expect([1, 2, 3].ktContains(3))
  })

  test('not contains number', () => {
    expect(![1, 2, 3].ktContains(100))
  })

  test('containsAll numbers', () => {
    expect([1, 2, 3].ktContainsAll([1, 2]))
  })

  test('not containsAll numbers', () => {
    expect([1, 2, 3].ktContainsAll([1, 2, 100]))
  })

  test('contains nullable number', () => {
    expect([1, 2, 3, null].ktContains(null))
  })

  test('contains nullable number', () => {
    expect([1, 2, 3, null].ktContains(3))
  })

  test('not contains nullable number', () => {
    expect(![1, 2, 3, null].ktContains(undefined as any))
  })

  test('not contains nullable number', () => {
    expect([1, 2, 3, null].ktContains(100))
  })

  test('contains string', () => {
    expect(['apple', 'orange', 'banana'].ktContains('banana'))
  })

  test('containsAll string', () => {
    expect(['apple', 'orange', 'banana'].ktContainsAll(['apple', 'orange']))
  })

  test('not containsAll string', () => {
    expect(!['apple', 'orange', 'banana'].ktContainsAll(['apple', 'orange', 'grape']))
  })

  test('contains object', () => {
    expect(
      users.ktContains({
        id: 2,
        name: 'Mary',
      }),
    )
  })

  test('not contains object', () => {
    expect(
      !users.ktContains({
        id: 100,
        name: 'Mary',
      }),
    )
  })

  test('contains nullable object', () => {
    expect([...users, null].ktContains(null))
  })

  test('not contains nullable object', () => {
    expect(![...users, null].ktContains(undefined as any))
  })

  test('containsAll object', () => {
    expect(
      users.ktContainsAll([
        {
          id: 2,
          name: 'Mary',
        },
        {
          id: 1,
          name: 'Peter',
        },
      ]),
    )
  })

  test('not containsAll object', () => {
    expect(
      users.ktContainsAll([
        {
          id: 100,
          name: 'Mary',
        },
        {
          id: 1,
          name: 'Peter',
        },
      ]),
    )
  })
})
