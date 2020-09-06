import inject from './forEach'

describe('forEach', () => {
  inject(Array.prototype)

  test('forEachIndexed', () => {
    const iterated: Array<{ index: number; value: any }> = []
    const arr = [1, 2, 3]
    arr.ktForEachIndexed((index, value) => {
      iterated.push({
        value,
        index,
      })
    })
    expect(iterated).toStrictEqual([
      {
        index: 0,
        value: 1,
      },
      {
        index: 1,
        value: 2,
      },
      {
        index: 2,
        value: 3,
      },
    ])
  })
})
