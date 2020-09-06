import inject from './filter'

describe('filter', () => {
  inject(Array.prototype)

  test('filterIndexed', () => {
    expect(
      [{ id: 0 }, { id: 2 }, { id: 1 }, { id: 100 }].ktFilterIndexed(
        (index, value) => value.id >= index,
      ),
    ).toStrictEqual([{ id: 0 }, { id: 2 }, { id: 100 }])
  })

  test('filterNot', () => {
    expect([true, false, true].ktFilterNot(value => value)).toStrictEqual([false])
    expect([1, 2, 3, 4].ktFilterNot(value => value > 0)).toStrictEqual([])
    expect([1, 2, 3, 4].ktFilterNot(value => value > 3)).toStrictEqual([1, 2, 3])
  })

  test('filterNotNull', () => {
    const arr = [1, null, 2, 3, undefined]
    const filtered: number[] = arr.ktFilterNotNull()
    expect(filtered).toStrictEqual([1, 2, 3])
  })
})
