import inject from './filter'

describe('filter', () => {
  inject(Array.prototype)

  test('filterNotNull', () => {
    const arr = [1, null, 2, 3, undefined]
    const filtered: number[] = arr.filterNotNull()
    expect(filtered).toStrictEqual([1, 2, 3])
  })
})
