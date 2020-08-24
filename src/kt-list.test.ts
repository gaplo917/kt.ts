import './kt-list'

describe('map', () => {
  const plusOne = (it: number) => it + 1
  const appendA = (it: string) => it + 'a'
  const numberToString = (it: number) => String(it)

  test('number -> number', () => {
    expect([1, 2, 3].map(plusOne)).toStrictEqual([2, 3, 4])
  })

  test('string -> string', () => {
    expect(['a', 'b', 'c'].map(appendA)).toStrictEqual(['aa', 'ba', 'ca'])
  })

  test('number -> string', () => {
    expect([1, 2, 3].map(numberToString)).toStrictEqual(['1', '2', '3'])
  })
})
